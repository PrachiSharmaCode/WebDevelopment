var mongoose = require("mongoose");

var widgetSchema = mongoose.Schema({
  page:String,
  widgetType: String,
  text: String,
  size: Number,
  url: String,
  width: String,
  rows: Number,
  name: String,
  placeholder: String,
  formatted: Boolean
}, {collection:'widget'});

module.exports = widgetSchema;
