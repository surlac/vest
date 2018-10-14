FROM golang:1.10

# Download and install the latest release of dep
ADD https://github.com/golang/dep/releases/download/v0.5.0/dep-linux-amd64 /usr/bin/dep
RUN chmod +x /usr/bin/dep

RUN apt-get update && apt-get --no-install-recommends install -y \
    git

RUN git clone https://github.com/mapledrive/vest.git /go/src/vest.com/vest

WORKDIR /go/src/vest.com/vest/go

RUN dep init

RUN dep ensure --vendor-only

# Generate binary file
RUN go build -o app server/server.go

# Expose the port
EXPOSE 8080:8080

# Run the executable
CMD ["./app"]