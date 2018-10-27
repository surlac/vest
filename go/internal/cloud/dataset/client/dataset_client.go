package client

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"net"
	"net/http"
	"time"

	"vest.com/vest/go/internal/errutil"

	"errors"
	"fmt"
)

const (
	datasetURL = "https://www.quandl.com/api/v3/datasets/%v?api_key=n6ARWfeVmpUtu_1sqc3z"
)

type Code string

const (
	Gold Code = "WGC"
)

var (
	datasetMap = map[Code]string{
		Gold: "WGC/GOLD_DAILY_USD.json",
	}

	ErrNotFound = errors.New("not found")
)

type Data struct {
	Time  time.Time
	Value float64
}

type Dataset struct {
	Data []Data
}

type Client struct {
}

func DecodeRaw(b []byte) (Dataset, error) {
	c, err := getFromRaw(b)
	if err != nil {
		return Dataset{}, errutil.Wrap(err, string(b))
	}
	return c, nil
}

func (c *Client) Get(ctx context.Context, code Code) (Dataset, error) {
	val, ok := datasetMap[code]
	if !ok {
		return Dataset{}, ErrNotFound
	}

	url := fmt.Sprintf(datasetURL, val)

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return Dataset{}, errutil.Wrap(err, url)
	}
	req = req.WithContext(ctx)

	resp, err := client(ctx).Do(req)
	if err != nil {
		switch err := err.(type) {
		case net.Error:
			return Dataset{}, errutil.Wrap(err, url)
		default:
			return Dataset{}, errutil.Wrap(err, url)
		}
	}
	defer func() { _ = resp.Body.Close() }()

	if resp.StatusCode != http.StatusOK {
		return Dataset{}, NewStatusError(resp)
	}

	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return Dataset{}, errutil.Wrap(err)
	}

	ds, err := getFromResp(b)
	if err != nil {
		return Dataset{}, errutil.Wrap(err, string(b))
	}
	return ds, nil
}

func getFromResp(b []byte) (_ Dataset, _ error) {
	c, err := getFromRaw(b)
	if err != nil {
		return Dataset{}, errutil.Wrap(err, string(b))
	}
	return c, nil
}

func getFromRaw(b []byte) (Dataset, error) {
	var quandlDataset struct {
		Dataset struct {
			ID                  int             `json:"id"`
			DatasetCode         string          `json:"dataset_code"`
			DatabaseCode        string          `json:"database_code"`
			Name                string          `json:"name"`
			Description         string          `json:"description"`
			RefreshedAt         time.Time       `json:"refreshed_at"`
			NewestAvailableDate string          `json:"newest_available_date"`
			OldestAvailableDate string          `json:"oldest_available_date"`
			ColumnNames         []string        `json:"column_names"`
			Frequency           string          `json:"frequency"`
			Type                string          `json:"type"`
			Premium             bool            `json:"premium"`
			Limit               interface{}     `json:"limit"`
			Transform           interface{}     `json:"transform"`
			ColumnIndex         interface{}     `json:"column_index"`
			StartDate           string          `json:"start_date"`
			EndDate             string          `json:"end_date"`
			Data                [][]interface{} `json:"Data"`
			Collapse            interface{}     `json:"collapse"`
			Order               interface{}     `json:"order"`
			DatabaseID          int             `json:"database_id"`
		} `json:"dataset"`
	}

	if err := json.Unmarshal(b, &quandlDataset); err != nil {
		fmt.Println(err)
	}

	const dateFormat = "2006-01-02"
	var data []Data
	for _, d := range quandlDataset.Dataset.Data {
		label, labelOK := d[0].(string)
		if !labelOK {
			continue
		}
		labelTime, err := time.Parse(dateFormat, label)
		if err != nil {
			continue
		}
		value, valueOK := d[1].(float64)
		if !valueOK {
			continue
		}
		// reverse order
		data = append([]Data{{Time: labelTime, Value: value}}, data...)
	}

	return Dataset{Data: data}, nil
}

func client(ctx context.Context) *http.Client {
	client := &http.Client{}
	if _, ok := ctx.Deadline(); !ok {
		client.Timeout = 10 * time.Second
	}
	return client
}

type StatusError struct {
	Status int
	Key    string
}

func NewStatusError(resp *http.Response) StatusError {
	var body struct {
		Key string
	}

	_ = json.NewDecoder(resp.Body).Decode(&body)

	return StatusError{resp.StatusCode, body.Key}
}

func (e StatusError) Error() string {
	return fmt.Sprintf("HTTP status error code=%v key=%s", e.Status, e.Key)
}
