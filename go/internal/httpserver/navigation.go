package httpserver

import (
	"net/http"
	"vest.com/vest/go/internal/api"
	"vest.com/vest/go/internal/errutil"
)

type navigation struct {
	Commodities []asset `json:"commodities,omitempty"`
}

type asset struct {
	ID        int    `json:"id, omitempty"`
	Slug      string `json:"slug, omitempty"`
	Name      string `json:"name, omitempty"`
	IsVisible bool   `json:"is_visible, omitempty"`
}

type navigationGetHandler struct {
	api api.APIer
}

func newNavigationGetHandler(api api.APIer) http.Handler {
	return unknownPublicParamHandler{
		erroringHandler{
			&navigationGetHandler{api},
		},
		map[string]struct{}{},
		"",
		map[string]struct{}{},
		nil,
	}
}

func (h *navigationGetHandler) serve(w http.ResponseWriter, r *http.Request) error {
	ctx := r.Context()

	w.Header().Set("Content-Type", "application/json")

	apiN, err := h.api.Navigation(ctx)
	switch err {
	case nil:
	case api.ErrNotFound:
		return errNotFound
	default:
		return errutil.Wrap(err)
	}

	n := convertNavigation(apiN)

	b, err := marshal(ctx, n)
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

func convertNavigation(n api.Navigation) navigation {
	return navigation{
		convertAssets(n.Commodities),
	}
}

func convertAsset(a api.Asset) asset {
	return asset{
		a.ID, a.Slug, a.Name, a.IsVisible,
	}
}

func convertAssets(apiAssets []api.Asset) []asset {
	var assets []asset
	for _, a := range apiAssets {
		assets = append(assets, convertAsset(a))
	}
	return assets
}
