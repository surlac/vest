package httpserver

import (
	"fmt"
	"net/http"
	"time"

	"vest.com/vest/go/internal/api"
	"vest.com/vest/go/internal/errutil"
)

type chart struct {
	dataset `json:"chart,omitempty"`
	metrics `json:"metrics,omitempty"`
}

type dataset struct {
	Labels []string  `json:"labels,omitempty"`
	Values []float64 `json:"values,omitempty"`
}

type metrics struct {
	Start *string `json:"start,omitempty"`
	End   *string `json:"end,omitempty"`
}

const (
	rangeStartParam = "rs"
	rangeEndParam   = "re"
	dateFormat      = "2006-01-02"
)

type DatasetCode string

var (
	toApiDatasetCode = map[string]api.DatasetCode{
		"gc": api.Gold,
	}
)

type chartsGetHandler struct {
	api api.APIer
}

func newChartsGetHandler(api api.APIer) http.Handler {
	return unknownPublicParamHandler{
		erroringHandler{
			&chartsGetHandler{api},
		},
		map[string]struct{}{codeParam: {}, rangeStartParam: {}, rangeEndParam: {}},
		"",
		map[string]struct{}{codeParam: {}},
		nil,
	}
}

func (h *chartsGetHandler) serve(w http.ResponseWriter, r *http.Request) error {
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

	rsString, ok := contextParam(ctx, rangeStartParam)
	if !ok {
		return msgError{errReqParamMissing, fmt.Sprintf("Required query parameter '%v' is missing", rangeStartParam)}
	}
	rs, err := time.Parse(dateFormat, rsString)
	if err != nil {
		return msgError{errBadTime, fmt.Sprintf("'%v' was not in 'yyyy-mm-dd' format", rangeStartParam)}
	}

	reString, ok := contextParam(ctx, rangeEndParam)
	if !ok {
		return msgError{errReqParamMissing, fmt.Sprintf("Required query parameter '%v' is missing", rangeEndParam)}
	}
	re, err := time.Parse(dateFormat, reString)
	if err != nil {
		return msgError{errBadTime, fmt.Sprintf("'%v' was not in 'yyyy-mm-dd' format", rangeEndParam)}
	}

	apiC, err := h.api.Chart(ctx, dc, rs, re)
	switch err {
	case nil:
	case api.ErrNotFound:
		return errNotFound
	default:
		return errutil.Wrap(err)
	}

	c := convertChart(apiC)

	b, err := marshal(ctx, c)
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

func convertChart(a api.Chart) chart {
	var start, end *string
	if a.Start != (time.Time{}) {
		s := a.Start.Format(dateFormat)
		start = &s
	}
	if a.End != (time.Time{}) {
		s := a.End.Format(dateFormat)
		end = &s
	}

	return chart{
		dataset{
			Values: a.Values,
			Labels: a.Labels,
		},
		metrics{
			Start: start,
			End:   end,
		},
	}
}
