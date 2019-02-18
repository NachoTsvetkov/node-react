var http = require('http');
var dt = require('./my-first-module');

http.createServer(function (req, res) {
  dt.myDateTime();
}).listen(8080);

