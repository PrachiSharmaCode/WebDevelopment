var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");

var websiteModel = mongoose.model("websiteModel", websiteSchema);

websiteModel.findWebsiteById = findWebsiteById;
websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteForUser = findWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function updateWebsite(websiteId,website) {
  return websiteModel.updateOne({_id: websiteId},website)
}

function deleteWebsite(websiteId) {
  return websiteModel.deleteOne({_id: websiteId})
}

function findWebsiteForUser(userId) {
  return websiteModel.find({developerId: userId});
}

function findWebsiteById(webId){
  return websiteModel.findById(webId);
}

function createWebsite(website){
  console.log(website);
  return websiteModel.create(website);
}

