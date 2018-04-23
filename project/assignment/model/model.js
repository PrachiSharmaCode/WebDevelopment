var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://heroku_zc468s43:lv8q39eu1kougmsm6vvea7845g@ds235768.mlab.com:35768/heroku_zc468s43");
//var db = mongoose.connect("mongodb://localhost:27017/webdev");

module.exports = db;
