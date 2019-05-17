package errutil

import (
	"fmt"
	"github.com/pkg/errors"
)

func Wrap(err error, a ...string) error {
	msg := ""
	if len(a) > 0 {
		msg = a[0]
	}
	return errors.Wrap(err, msg)
}

func New(a ...interface{}) error {
	return fmt.Errorf(fmt.Sprintln(a...))
}
