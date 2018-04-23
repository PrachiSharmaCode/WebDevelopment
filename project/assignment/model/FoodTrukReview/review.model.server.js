var mongoose = require("mongoose");
var ReviewSchema = require("./review.schema.server");

var ReviewModel = mongoose.model("ReviewModel", ReviewSchema);

ReviewModel.addReview = addReview;
ReviewModel.getreviewByTruckId = getreviewByTruckId;

module.exports = ReviewModel;

function addReview(review) {
  return ReviewModel.create(review);
}

function getreviewByTruckId(truckId) {
  return ReviewModel.find({truckId: truckId});
}







