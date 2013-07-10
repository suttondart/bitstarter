

var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer('test');


app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

console.log(" bytes: " + buf.toString('utf8'));
