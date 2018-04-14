var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://heroku_pfgz9g0c:8ulljbjprj62dncan4c6ohdl4v@ds263847.mlab.com:63847/heroku_pfgz9g0c");
//var db = mongoose.connect("mongodb://localhost:27017/webdev");

module.exports = db;
