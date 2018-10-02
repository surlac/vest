package log

import (
	"go.uber.org/zap"
)

var (
	sugar *zap.SugaredLogger
)

func init() {
	logger, _ := zap.NewProduction()
	defer logger.Sync()

	sugar = logger.Sugar()
}

func Error(args ...interface{}) {
	sugar.Error(args...)
}

func Info(args ...interface{}) {
	sugar.Info(args...)
}
