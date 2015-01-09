/*jshint node:true*/
'use strict';
var config = require('config');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var apiRouter = require('./api-router');

var app = express();

app
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())
  .use(session({
    secret: 'zfnzkwjehgweghw',
    resave: false,
    saveUninitialized: true
  }));

app
  .use('*', function (req, res, next) {
    console.log('hello');
    next();
  })
  .use('/', function (req, res) {
    res.send('Welcome to Swipe Right.').end();
  })
  .use('/api', apiRouter)
  .listen(process.env.PORT || config.get('PORT'), function () {
    console.log('Server listening on port:', process.env.PORT || config.get('PORT'));
  });