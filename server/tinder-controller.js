/*jshint node:true */
'use strict';

var config = require('config');
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var tinderController = {
  get: function (req, res) {
    client.authorize(
    config.get('FB_USER_TOKEN'),
    config.get('FB_USER_ID'),
    function() {
      var defaults = client.getDefaults();
      var recs_size = defaults.globals.recs_size;
      client.getRecommendations(recs_size, function(error, data){
        console.log('data');
        console.log(data);
        res.json(data);
      });
    }
  );
  }
};

module.exports = tinderController;