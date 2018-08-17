"use strict"
var drafter = require('drafter');
var fs = require('fs');

var blueprint = fs.readFileSync('apiblueprint_SunsetSunrise.apib', 'ascii');

drafter.parse(blueprint, function(error, result) {
    console.log(error ? 'error:' : 'result:');
    console.log(error || result);
});