#!/bin/sh

# build image
docker build --force-rm -t vest-build .

# start container
docker run -d -p 8080:8080 vest-build
