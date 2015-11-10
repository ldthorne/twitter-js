var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");
var morgan = require("morgan");



app.use(function(req, res){ //guy at gate
	console.log("hello");
});


app.get("/", function(req, res){  //airline
	res.send("Check yourself before you req yourself");
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});

