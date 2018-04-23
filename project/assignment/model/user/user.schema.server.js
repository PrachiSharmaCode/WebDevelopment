var mongoose = require("mongoose");
var websiteSchema = require("../website/website.schema.server");


// var UserSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
//   firstName:String,
//   lastName: String,
//   websites:[websiteSchema],
// }, {collection:'user'});
//
// var FBUserSchema = mongoose.Schema({
//   facebook: {
//     id:    String,
//     token: String
//   }
// });
//
// module.exports = UserSchema;
// module.exports = FBUserSchema;

var UserSchema = mongoose.Schema ({
  username : {type: String, required: true},
  password : String,
  firstName : String,
  email : String,
  facebook : {
    token: String,
    id: String,
    displayName : String
  },
  lastName : String,
  websites: [websiteSchema],
}, {collection: "user" });

module.exports = UserSchema;


