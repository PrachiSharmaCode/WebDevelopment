var mongoose = require("mongoose");
var widgetSchema = require("../widget/widget.schema.server");



var pageSchema = mongoose.Schema({
  name: String,
  websiteId: String,
  title: String,
  widgets:[widgetSchema],
}, {collection:'page'});

module.exports = pageSchema;
