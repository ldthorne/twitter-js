var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");
var swig = require("swig");



app.use(function(req, res, next){ //guy at gate
	console.log("Check yourself before you req yourself");
	next();
});

app.engine("html", require("swig").renderFile);

app.set("view engine", "html");

app.set("views", __dirname + "/views/");

swig.setDefaults({cache : false});

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.get("/", function(req, res){
	console.log("hi");
	res.render( 'index', {title: 'Hall of Fame', people: people});
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});

