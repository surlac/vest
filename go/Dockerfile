FROM golang:1.10

# Download and install the latest release of dep
ADD https://github.com/golang/dep/releases/download/v0.5.0/dep-linux-amd64 /usr/bin/dep
RUN chmod +x /usr/bin/dep

RUN apt-get update && apt-get --no-install-recommends install -y \
    git
