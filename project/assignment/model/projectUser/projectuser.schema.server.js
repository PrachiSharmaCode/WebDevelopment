var mongoose = require("mongoose");

var ProjectUserSchema = mongoose.Schema ({
  username : {type: String, required: true},
  password : String,
  firstName : String,
  email : String,
  lastName : String,
  usertype: String,
  phone: String
}, {collection: "userproject" });

module.exports = ProjectUserSchema;


