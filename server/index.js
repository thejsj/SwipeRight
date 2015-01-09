/*jshint node:true*/
'use strict';

var FBClientId = '633057653465304';
var FBClientSecret = 'e6faf811ec096d92a37882e3a6691592';

var FB_USER_TOKEN = "CAAGm0PX4ZCpsBACoCt8hICfoPwKSOcY4Vvqo1gicW5OfLWYlZA0pMhlPE6ZCkO30ztuqIYs3GYr3E2QeeVnS4zpkqWaPZBC0duZAZCIF6zo7mmbFxVjkzuQ4robZCZCnJSBsSFoMPGuuyssWn0AZAmjq2J2DWM4Ne9s6Tg8rdxWGl4Bpo32UIbAgTmo9CqEhOdOzwBCFlrvyo7bJZAasCMafsB";
var FB_USER_ID = 500712220;

var tinder = require('tinderjs');
var client = new tinder.TinderClient();

client.authorize(
  FB_USER_TOKEN,
  FB_USER_ID,
  function() {
    var defaults = client.getDefaults();
    var recs_size = defaults.globals.recs_size;
    client.getRecommendations(recs_size, function(error, data){
      console.log('data');
      console.log(data);
    });
  }
);