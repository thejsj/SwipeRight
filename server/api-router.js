/*jshint node:true */
'use strict';

var express = require('express');

var apiRouter = express.Router();
var tinderController = require('./tinder-controller');

apiRouter.use('*', tinderController.get);
// apiRouter.post('/', tinderController.post);

module.exports = apiRouter;