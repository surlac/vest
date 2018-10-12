package httpserver

import (
	"fmt"
	"net/http"
)

var (
	errInternalServerError = &simpleError{"internalServerError", http.StatusInternalServerError}
	errNotFound            = &simpleError{"notFound", http.StatusNotFound}
	errBadTime             = &simpleError{"badTime", http.StatusBadRequest}
	errMethodNotAllowed    = &headerError{simpleError{"methodNotAllowed", http.StatusMethodNotAllowed}, makeKeys("Allow")}
	errUnknownParam        = &simpleError{"unknownParam", http.StatusBadRequest}
	errDuplicatedParam     = &simpleError{"duplicatedParam", http.StatusBadRequest}
	errReqParamMissing     = &msgError{simpleError{"reqParamMissing", http.StatusBadRequest}, "Required paramter(s) missing"}
	errInvalidParamValue   = &msgError{simpleError{"invalidParamValue", http.StatusBadRequest}, "Invalid param value"}
	errTimeout             = &msgError{simpleError{"timeout", http.StatusGatewayTimeout}, "Exceeded timeout"}
	errCanceled            = &msgError{simpleError{"canceled", http.StatusInternalServerError}, "Canceled"}
)

type httpError interface {
	error
	key() string
	msg() string
	code() int
	headers() map[string]struct{}
}

type simpleError struct {
	k string
	c int
}

func (b simpleError) Error() string {
	return fmt.Sprintf("%v %v", b.k, b.c)
}

func (b simpleError) key() string {
	return b.k
}

func (b simpleError) code() int {
	return b.c
}

func (b simpleError) msg() string {
	return http.StatusText(b.c)
}

func (simpleError) headers() map[string]struct{} {
	return nil
}

type headerError struct {
	httpError
	h map[string]struct{}
}

func (h headerError) headers() map[string]struct{} { return h.h }

type msgError struct {
	httpError
	m string
}

func (e msgError) Error() string {
	return fmt.Sprintf("%v, '%v'", e.httpError.Error(), e.m)
}

func (e msgError) msg() string {
	return e.m
}

func makeKeys(vals ...string) map[string]struct{} {
	m := make(map[string]struct{})
	for _, v := range vals {
		m[v] = struct{}{}
	}
	return m
}
