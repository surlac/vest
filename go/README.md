Back-end for Vest
========================
REST API server written in Go
 
## build and run
### Linux
1) install Docker  
https://docs.docker.com/install  
2) build image and run the server  
$ ./build.sh  

### Windows
1) install Go and Git  
https://golang.org/doc/install  
https://git-scm.com/downloads  
2) set environment variable for GOPATH=C:\Go  
https://github.com/golang/go/wiki/SettingGOPATH  
3) clone project  
$ git clone https://github.com/mapledrive/vest.git C:\Go\src\vest.com\vest\  
4) run server  
$ cd C:\Go\src\vest.com\vest\go\  
$ C:\Go\bin\dep init  
$ C:\Go\bin\dep ensure  
$ go run server\server.go  

