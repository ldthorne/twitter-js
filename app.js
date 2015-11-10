var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");
var swig = require("swig");
var routes = require('./routes/');
var fs = require("fs")
var mime = require("mime")
// var socketio = require('socket.io');
// var server = app.listen(3000);
// var io = socketio.listen(server);


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) { //guy at gate
    console.log("Check yourself before you req yourself");
    next();
});

app.use(function(req, res, next) {
  console.log(req.path) // stylesheets/style.css
  var mimeType = mime.lookup(req.path)
  fs.readFile('./public/' + req.path, function(err, fileBuffer) {
    if(err) return next()
    res.header('Content-Type', mimeType)
    res.send(fileBuffer)
  })
})


app.use('/', routes);

app.get("/")


app.engine("html", require("swig").renderFile);

app.set("view engine", "html");

app.set("views", __dirname + "/views/");

swig.setDefaults({
    cache: false
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});
