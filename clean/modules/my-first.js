var http = require('http');
var dt = require('./my-first-module');

http.createServer(function (req, res) {
  res.write("Date: " + dt.myDateTime());
  res.end();
}).listen(8080);

