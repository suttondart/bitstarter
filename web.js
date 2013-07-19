var fs = require ('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer('test');

buf = fs.readFileSync('index.html')

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send( buf.toString('utf8'));
  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
