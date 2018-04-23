var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");

var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.findFacebookUser = findFacebookUser;
UserModel.findUserName =  findUserName;

module.exports = UserModel;

function updateUser(userId,user) {
  return UserModel.updateOne({_id:userId},user)
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username,password: password})
}

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function createUser(user){
  return UserModel.create(user);
}

function findFacebookUser(id) {
  return UserModel.findOne({"facebook.id": id});
}


function findUserName(username) {
  return UserModel.findOne({username: username});
}

function findUserByUsername(username) {
  var user = null;
  UserModel
    .findOne({username: username})
    .then(function (result) {
      console.log(result);
      user = result;
    });
  return user;
}




