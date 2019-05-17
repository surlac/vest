package dataset

import (
	"context"
	"errors"
	"time"
	"vest.com/vest/go/internal/cloud/dataset/client"
	"vest.com/vest/go/internal/errutil"
)

type Code string

const (
	Gold Code = "WGC"
)

func (c Code) toClientCode() client.Code {
	switch c {
	case Gold:
		return client.Gold
	default:
		return ""
	}
}

var (
	ErrNotFound = errors.New("not found")
)

type Servicer interface {
	Get(context.Context, Code) (Chart, error)
}

type QuandlService struct {
}

func New() *QuandlService {
	return &QuandlService{}
}

type Data struct {
	Time  time.Time
	Value float64
}

type Chart struct {
	Data       []Data
	Start, End time.Time
}

func (s *QuandlService) Get(ctx context.Context, code Code) (Chart, error) {
	client := &client.Client{}
	ds, err := client.Get(ctx, code.toClientCode())
	if err != nil {
		return Chart{}, errutil.Wrap(err)
	}

	c := Chart{}
	for _, data := range ds.Data {
		c.Data = append(c.Data, Data{Time: data.Time, Value: data.Value})
	}
	return c, nil
}
