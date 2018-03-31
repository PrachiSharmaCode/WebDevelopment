var mongoose = require("mongoose");
var websiteSchema = require("../website/website.schema.server");


var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName:String,
  lastName: String,
  websites:[websiteSchema],
}, {collection:'user'});

module.exports = UserSchema;
