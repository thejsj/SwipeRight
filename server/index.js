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
  .use('/api', apiRouter)
  .listen(config.get('PORT'), function () {
    console.log('Server listening on port:', config.get('PORT'));
  });