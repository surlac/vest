package api

import (
	"context"
	"fmt"
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
	StatsData
	PatternChartData ChartData
	EquityChartData  ChartData
	Patterns
}

type StatsData struct {
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

type ChartData struct {
	Labels []string
	Values []float64
}

type Patterns struct {
	Data []Pattern
}

type Pattern struct {
	TradingDays  int
	CalendarDays int
	StartDate    time.Time
	EndDate      time.Time
	StartPrice   float64
	EndPrice     float64
	MaxDrop      float64
	MaxRise      float64
	ProfitAbs    float64
	ProfitRel    float64
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

	pcd, ecd := ChartData{}, ChartData{}
	patterns := Patterns{}
	for y := rangeStart.Year(); y <= rangeEnd.Year(); y++ {
		pcd.Labels = append(pcd.Labels, fmt.Sprint(y))
		pcd.Values = append(pcd.Values, toFixed(rand.Float64()*10-5, 2))

		// equity
		ps := time.Date(y, periodStart.Month(), periodStart.Day(), 0, 0, 0, 0, time.UTC)
		pe := time.Date(y, periodEnd.Month(), periodEnd.Day(), 0, 0, 0, 0, time.UTC)
		for d := ps; d.Before(pe) || d.Equal(pe); d = d.Add(24 * time.Hour) {
			if d.Weekday() == time.Monday {
				ecd.Labels = append(ecd.Labels, d.Format(dateFormat))
				ecd.Values = append(ecd.Values, toFixed(rand.Float64()*10+95, 2))
			}
		}

		// patterns
		pattern := Pattern{
			rand.Intn(365),
			rand.Intn(365),
			ps,
			pe,
			toFixed(rand.Float64()*10+95, 2),
			toFixed(rand.Float64()*10+95, 2),
			toFixed(-rand.Float64()*10, 2),
			toFixed(rand.Float64()*10, 2),
			toFixed(rand.Float64()*50-25, 2),
			toFixed(rand.Float64()*10-5, 2),
		}
		patterns.Data = append(patterns.Data, pattern)
	}

	s := Stats{
		StatsData{
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
		},
		pcd,
		ecd,
		patterns,
	}

	return s, nil
}
