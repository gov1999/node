const http = require('http');
var port = 4000;
var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello from Nodejs!!\n');
});

server.listen(port);
console.log(`Server listening on port ${port}`);
