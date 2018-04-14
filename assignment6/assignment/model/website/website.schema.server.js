var mongoose = require("mongoose");
var pageSchema = require("../page/page.schema.server");


var websiteSchema = mongoose.Schema({
  developerId: String,
  name: String,
  description: String,
  pages:[pageSchema],
}, {collection:'website'});

module.exports = websiteSchema;
