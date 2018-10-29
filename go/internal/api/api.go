package api

import (
	"context"
	"math"
	"math/rand"
	"time"

	"errors"

	"vest.com/vest/go/internal/cloud/dataset"
	"vest.com/vest/go/internal/errutil"
)

type DatasetCode string

const (
	dateFormat = "2006-01-02"

	Gold DatasetCode = "WGC"
)

var (
	ErrNotFound = errors.New("not found")
)

func (c DatasetCode) toDatasetCode() (dataset.Code, error) {
	switch c {
	case Gold:
		return dataset.Gold, nil
	default:
		return "", errutil.New("bad dataset code")
	}
}

type APIer interface {
	Chart(_ context.Context, _ DatasetCode, MinTime, MaxTime time.Time) (Chart, error)
	Stats(_ context.Context, _ DatasetCode, rangeStart, rangeEnd, periodStart, periodEnd time.Time) (Stats, error)
}

type API struct {
	DatasetService dataset.CachingServicer
}

type Chart struct {
	Dataset
	Metrics
}

type Dataset struct {
	Labels []string
	Values []float64
}

type Metrics struct {
	Start, End time.Time
}

type Stats struct {
	AnnualizedRest    float64
	AnnualizedReturn  float64
	AverageProfit     float64
	AverageReturn     float64
	CalendarDays      int
	CurrentStreak     int
	LooserCount       int
	LooserProfit      float64
	MaxLoss           float64
	MaxProfit         float64
	MedianReturn      float64
	PatternCount      int
	ProfitRate        float64
	StandardDeviation float64
	TotalProfit       float64
	TradingDays       int
	WinnerCount       int
	WinnerProfit      float64
}

func (a *API) Chart(ctx context.Context, code DatasetCode, MinTime, MaxTime time.Time) (Chart, error) {
	dc, err := code.toDatasetCode()
	if err != nil {
		return Chart{}, errutil.Wrap(err)
	}

	cloudChart, err := a.DatasetService.Get(ctx, dc)
	switch err {
	case nil:
	case dataset.ErrNotFound:
		return Chart{}, ErrNotFound
	default:
		return Chart{}, errutil.Wrap(err)
	}

	c := Chart{}
	for _, v := range cloudChart.Data {
		if v.Time.Before(MinTime) || v.Time.After(MaxTime) {
			continue
		}
		c.Labels = append(c.Labels, v.Time.Format(dateFormat))
		c.Values = append(c.Values, v.Value)
	}
	c.Start = cloudChart.Start
	c.End = cloudChart.End

	return c, nil
}

func (a *API) Stats(ctx context.Context, code DatasetCode, rangeStart, rangeEnd, periodStart, periodEnd time.Time) (Stats, error) {
	_, err := code.toDatasetCode()
	if err != nil {
		return Stats{}, errutil.Wrap(err)
	}

	toFixed := func(num float64, precision int) float64 {
		round := func(num float64) int {
			return int(num + math.Copysign(0.5, num))
		}
		output := math.Pow(10, float64(precision))
		return float64(round(num*output)) / output
	}

	s := Stats{
		toFixed(rand.Float64(), 2),
		toFixed(rand.Float64()*20-10, 2),
		toFixed(rand.Float64()*20-10, 2),
		toFixed(rand.Float64(), 2),
		rand.Intn(365),
		rand.Intn(10) - 5,
		rand.Intn(10),
		toFixed(rand.Float64()*10-5, 2),
		toFixed(rand.Float64()*10-5, 2),
		toFixed(rand.Float64()*10-5, 2),
		toFixed(rand.Float64()-0.5, 2),
		rand.Intn(10),
		toFixed(rand.Float64()*100, 2),
		toFixed(rand.Float64()*5, 2),
		toFixed(rand.Float64()*200-100, 2),
		rand.Intn(365),
		rand.Intn(10),
		toFixed(rand.Float64()*10-5, 2),
	}

	return s, nil
}
