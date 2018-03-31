var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");

var pageModel = mongoose.model("pageModel", pageSchema);

pageModel.findPageById = findPageById;
pageModel.createPage = createPage;
pageModel.findPageForWebsite = findPageForWebsite;
pageModel.updateWebsite = updateWebsite;
pageModel.deleteWebsite= deleteWebsite;

module.exports = pageModel;


function findPageForWebsite(websiteId) {
  return pageModel.find({websiteId: websiteId});
}

function updateWebsite(pageId,page) {
  return pageModel.updateOne({_id: pageId},page)
}

function deleteWebsite(pageId) {
  return pageModel.deleteOne({_id: pageId})
}

function findPageById(pageId){
  return pageModel.findById(pageId);
}

function createPage(page){
  console.log(page);
  return pageModel.create(page);
}

