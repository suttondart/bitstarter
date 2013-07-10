

mybuffer = new Buffer(60);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


fs.readFileSync('index.html', mybuffer);

buffer.toString("utf-8")

console.log(mybuffer.toString('utf8', 0, len));
