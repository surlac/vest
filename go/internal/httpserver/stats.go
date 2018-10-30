package httpserver

import (
	"fmt"
	"net/http"
	"time"

	"vest.com/vest/go/internal/api"
	"vest.com/vest/go/internal/errutil"
)

type stats struct {
	StatsData        statsData `json:"stats,omitempty"`
	PatternChartData chartData `json:"patternChartData,omitempty"`
	EquityChartData  chartData `json:"equityChartData,omitempty"`
}

type statsData struct {
	AnnualizedRest    float64 `json:"annualized_rest, omitempty"`
	AnnualizedReturn  float64 `json:"annualized_return, omitempty"`
	AverageProfit     float64 `json:"average_profit, omitempty"`
	AverageReturn     float64 `json:"average_return, omitempty"`
	CalendarDays      int     `json:"calendar_days, omitempty"`
	CurrentStreak     int     `json:"current_streak, omitempty"`
	LooserCount       int     `json:"looser_count, omitempty"`
	LooserProfit      float64 `json:"looser_profit, omitempty"`
	MaxLoss           float64 `json:"max_loss, omitempty"`
	MaxProfit         float64 `json:"max_profit, omitempty"`
	MedianReturn      float64 `json:"median_return, omitempty"`
	PatternCount      int     `json:"pattern_count, omitempty"`
	ProfitRate        float64 `json:"profit_rate, omitempty"`
	StandardDeviation float64 `json:"standard_deviation, omitempty"`
	TotalProfit       float64 `json:"total_profit, omitempty"`
	TradingDays       int     `json:"trading_days, omitempty"`
	WinnerCount       int     `json:"winner_count, omitempty"`
	WinnerProfit      float64 `json:"winner_profit, omitempty"`
}

type chartData struct {
	Labels []string  `json:"labels,omitempty"`
	Values []float64 `json:"values,omitempty"`
}

const (
	statsRangeStartParam = "rangeStart"
	statsRangeEndParam   = "rangeEnd"
	periodStartParam     = "periodStart"
	periodEndParam       = "periodEnd"
	statsDateFormat      = "2006-01-02"
)

type statsGetHandler struct {
	api api.APIer
}

func newStatsGetHandler(api api.APIer) http.Handler {
	return unknownPublicParamHandler{
		erroringHandler{
			&statsGetHandler{api},
		},
		map[string]struct{}{codeParam: {}, statsRangeStartParam: {}, statsRangeEndParam: {}, periodStartParam: {}, periodEndParam: {}},
		"",
		map[string]struct{}{codeParam: {}},
		nil,
	}
}

func (h *statsGetHandler) serve(w http.ResponseWriter, r *http.Request) error {
	ctx := r.Context()

	w.Header().Set("Content-Type", "application/json")

	code, ok := contextParam(ctx, codeParam)
	if !ok {
		return msgError{errReqParamMissing, "Required query parameter 'code' is missing"}
	}
	dc := toApiDatasetCode[code]
	if dc == "" {
		return msgError{errInvalidParamValue, fmt.Sprintf("Invalid query parameter value '%v'", code)}
	}

	// range start/end
	rsString, ok := contextParam(ctx, statsRangeStartParam)
	if !ok {
		return msgError{errReqParamMissing, fmt.Sprintf("Required query parameter '%v' is missing", statsRangeStartParam)}
	}
	rs, err := time.Parse(dateFormat, rsString)
	if err != nil {
		return msgError{errBadTime, fmt.Sprintf("'%v' was not in 'yyyy-mm-dd' format", statsRangeStartParam)}
	}

	reString, ok := contextParam(ctx, statsRangeEndParam)
	if !ok {
		return msgError{errReqParamMissing, fmt.Sprintf("Required query parameter '%v' is missing", statsRangeEndParam)}
	}
	re, err := time.Parse(dateFormat, reString)
	if err != nil {
		return msgError{errBadTime, fmt.Sprintf("'%v' was not in 'yyyy-mm-dd' format", statsRangeEndParam)}
	}

	if !rs.Before(re) {
		return msgError{errBadTime, fmt.Sprintf("'%v' must be before '%v'", statsRangeStartParam, statsRangeEndParam)}
	}

	// period start/end
	psString, ok := contextParam(ctx, periodStartParam)
	if !ok {
		return msgError{errReqParamMissing, fmt.Sprintf("Required query parameter '%v' is missing", periodStartParam)}
	}
	ps, err := time.Parse(dateFormat, psString)
	if err != nil {
		return msgError{errBadTime, fmt.Sprintf("'%v' was not in 'yyyy-mm-dd' format", periodStartParam)}
	}

	peString, ok := contextParam(ctx, periodEndParam)
	if !ok {
		return msgError{errReqParamMissing, fmt.Sprintf("Required query parameter '%v' is missing", periodEndParam)}
	}
	pe, err := time.Parse(dateFormat, peString)
	if err != nil {
		return msgError{errBadTime, fmt.Sprintf("'%v' was not in 'yyyy-mm-dd' format", periodEndParam)}
	}

	if !ps.Before(pe) {
		return msgError{errBadTime, fmt.Sprintf("'%v' must be before '%v'", periodStartParam, periodEndParam)}
	}

	apiS, err := h.api.Stats(ctx, dc, rs, re, ps, pe)
	switch err {
	case nil:
	case api.ErrNotFound:
		return errNotFound
	default:
		return errutil.Wrap(err)
	}

	s := convertStats(apiS)

	b, err := marshal(ctx, s)
	if err != nil {
		return errutil.Wrap(err)
	}

	if r.Method == "HEAD" {
		return nil
	}
	if _, err := w.Write(b); err != nil {
		return errutil.Wrap(err)
	}
	return nil
}

func convertStats(a api.Stats) stats {
	return stats{
		statsData{
			a.AnnualizedRest,
			a.AnnualizedReturn,
			a.AverageProfit,
			a.AverageReturn,
			a.CalendarDays,
			a.CurrentStreak,
			a.LooserCount,
			a.LooserProfit,
			a.MaxLoss,
			a.MaxProfit,
			a.MedianReturn,
			a.PatternCount,
			a.ProfitRate,
			a.StandardDeviation,
			a.TotalProfit,
			a.TradingDays,
			a.WinnerCount,
			a.WinnerProfit,
		},
		chartData{
			Labels: a.PatternChartData.Labels,
			Values: a.PatternChartData.Values,
		},
		chartData{
			Labels: a.EquityChartData.Labels,
			Values: a.EquityChartData.Values,
		},
	}
}
