var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");

var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
/*UserModel.findAllUsers = findAllUsers;

//UserModel.findUserByUserName = findUserByUserName;
//UserModel.updateUser = updateUser;*/

module.exports = UserModel;

function updateUser(userId,user) {
  return UserModel.updateOne({_id:userId},user)
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username,password: password})
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function createUser(user){
  return UserModel.create(user);
}

