var raml = require("raml-1-parser");
var apiJSON = raml.load('apiblueprint_SunsetSunrise.raml');
console.log(JSON.stringify(apiJSON, null, 2));