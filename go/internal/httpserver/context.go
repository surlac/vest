package httpserver

import "context"

type paramKey struct {
	key string
}

func contextWithParam(ctx context.Context, k string, v string) context.Context {
	return context.WithValue(ctx, paramKey{k}, v)
}
func contextParam(ctx context.Context, k string) (string, bool) {
	v, ok := ctx.Value(paramKey{k}).(string)
	return v, ok
}

type prefixedParamsKey struct {
	prefix string
}

func contextWithPrefixedParams(ctx context.Context, prefix string, params map[string]struct{}) context.Context {
	return context.WithValue(ctx, prefixedParamsKey{prefix}, params)
}

type prettyKey struct{}

func contextWithPretty(ctx context.Context, pretty bool) context.Context {
	return context.WithValue(ctx, prettyKey{}, pretty)
}
func contextPretty(ctx context.Context) bool {
	v, _ := ctx.Value(prettyKey{}).(bool)
	return v
}

type respKeyKey struct{}

type respKey struct {
	key string
}

func contextRespKey(ctx context.Context) *respKey {
	v, _ := ctx.Value(respKeyKey{}).(*respKey)
	return v
}

type publicParamsKey struct{}

type publicParams map[string]struct{}

func contextWithPublicParams(ctx context.Context) context.Context {
	return context.WithValue(ctx, publicParamsKey{}, make(publicParams))
}

func contextPublicParams(ctx context.Context) publicParams {
	v, _ := ctx.Value(publicParamsKey{}).(publicParams)
	return v
}

type publicPathParamsKey struct{}

type publicPathParams map[string]struct{}

func contextWithPublicPathParams(ctx context.Context) context.Context {
	return context.WithValue(ctx, publicPathParamsKey{}, make(publicPathParams))
}

func contextPublicPathParams(ctx context.Context) publicPathParams {
	v, _ := ctx.Value(publicPathParamsKey{}).(publicPathParams)
	return v
}
