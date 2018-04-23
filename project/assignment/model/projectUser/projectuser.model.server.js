var mongoose = require("mongoose");
var ProjectUserSchema = require("./projectuser.schema.server");

var ProjectUserModel = mongoose.model("ProjectUserModel", ProjectUserSchema);

ProjectUserModel.findUserById = findUserById;
ProjectUserModel.createUser = createUser;
ProjectUserModel.findUserByCredentials = findUserByCredentials;
ProjectUserModel.updateUser = updateUser;
ProjectUserModel.findUserByUsername = findUserByUsername;
ProjectUserModel.findUserByFacebookId = findUserByFacebookId;
ProjectUserModel.findFacebookUser = findFacebookUser;
ProjectUserModel.findUserName =  findUserName;

module.exports = ProjectUserModel;

function updateUser(userId,user) {
  return ProjectUserModel.updateOne({_id:userId},user)
}

function findUserByCredentials(username, password) {
  return ProjectUserModel.findOne({username: username,password: password})
}

function findUserByFacebookId(facebookId) {
  return ProjectUserModel.findOne({'facebook.id': facebookId});
}

function findUserById(userId){
  return ProjectUserModel.findById(userId);
}

function createUser(user){
  return ProjectUserModel.create(user);
}

function findFacebookUser(id) {
  return ProjectUserModel.findOne({"facebook.id": id});
}

function findUserName(username) {
  return ProjectUserModel.findOne({username: username});
}

function findUserByUsername(username) {
  var user = null;
  ProjectUserModel
    .findOne({username: username})
    .then(function (result) {
      console.log(result);
      user = result;
    });
  return user;
}




