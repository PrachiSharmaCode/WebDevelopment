var mongoose = require("mongoose");

var ReviewSchema = mongoose.Schema ({
  review: String,
  userID: String,
  truckId: String
}, {collection: "review" });

module.exports = ReviewSchema;


