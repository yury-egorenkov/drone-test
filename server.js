'use strict'

var http = require('http')

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url)
  response.writeHead(200)
  response.end('Hello World!')
}

var www = http.createServer(handleRequest)

console.log(`server is running at http://localhost:3000`)
www.listen(3000)