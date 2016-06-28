var express = require("express");
var compression = require("compression");

var app = express();
app.use(compression());
app.use('/', express.static('.'));
app.use('/vendors', express.static('../node_modules'));

app.listen(3000, function () {
  console.log('Todo app is listening on port 3000!');
});