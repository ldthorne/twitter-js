var express = require('express');
var router = express.Router();
var _ = require("underscore")
var bodyParser = require('body-parser')
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', showForm: true, tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
   var tweets = tweetBank.list();
   var applicableTweets = _.where(tweets,{name:req.params.name})
   res.render("index", {title: "Twitter.js", showForm: true, name: req.params.name, tweets: applicableTweets});// --> 'nimit'
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');

});

module.exports = router;