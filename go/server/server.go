package main

import (
	"flag"
	"fmt"
	"io"
	"os"
	"os/signal"
	"time"

	"github.com/BurntSushi/toml"

	"vest.com/vest/go/internal/api"
	"vest.com/vest/go/internal/cloud/dataset"
	"vest.com/vest/go/internal/errutil"
	"vest.com/vest/go/internal/httpserver"
	"vest.com/vest/go/internal/log"
)

type Config struct {
	HTTPPort  int
	HTTPSPort int
}

var (
	defaultConfig Config
	configPath    string
	shutdown      chan struct{}
)

func init() {
	defaultTOML := `
		httpPort = 8080
		httpsPort = 443
`
	meta, err := toml.Decode(defaultTOML, &defaultConfig)
	if err != nil {
		panic(err)
	}
	if len(meta.Undecoded()) > 0 {
		panic(fmt.Sprintf("Unknown fields in default config: %v\n", meta.Undecoded()))
	}

	flag.StringVar(&configPath, "configPath", "", "TOML config file:\n"+defaultTOML+"\n\t")

	shutdown = make(chan struct{})

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt)
	go func() {
		s := <-sig
		log.Info("shutdown", s.String())
		close(shutdown)
	}()
}

func decodeConf(configPath string) (Config, error) {
	var cfg Config
	if configPath != "" {
		_, err := toml.DecodeFile(configPath, &cfg)
		if err != nil {
			return Config{}, errutil.Wrap(err, configPath)
		}
	} else {
		cfg = defaultConfig
	}
	return cfg, nil
}

func start() (rerr error) {
	cfg, err := decodeConf(configPath)
	if err != nil {
		return errutil.Wrap(err)
	}

	rerrClose := func(c io.Closer) {
		if err := c.Close(); err != nil && rerr == nil {
			rerr = errutil.Wrap(err)
		}
	}

	ds := dataset.New()

	apier := &api.API{
		DatasetService: *ds,
	}

	srv := &httpserver.HTTPServer{
		HTTPPort:  cfg.HTTPPort,
		HTTPSPort: cfg.HTTPSPort,
		APIer:     apier,
	}
	srv.Start()
	defer rerrClose(srv)

	<-shutdown
	return nil
}

func run() {
	timeout := time.After(time.Minute * 10)
	retry := time.Second * 10
	const maxRetry = time.Minute

	for {
		err := start()
		if err == nil {
			break
		}

		log.Error(err)

		select {
		case <-timeout:
			log.Info("shutdownTimeout")
			return
		case <-shutdown:
			return
		case <-time.After(retry):
		}

		retry *= 2
		if retry > maxRetry {
			retry = maxRetry
		}
	}
	<-shutdown
}

func main() {
	run()
}
