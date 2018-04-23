module.exports = function (app) {

  var ReviewModel = require("../model/FoodTrukReview/review.model.server");

  app.post("/reviewapi/:userId/:truckId", createTruck);
  app.get("/reviewapi/:truckId", getReviewForTrcuk);


  function createTruck(req, res) {
    var userId = req.params['userId'];
    var truckId = req.params['truckId'];
    var newReview = req.body;
    newReview.userID = userId;
    newReview.truckId = truckId;
    ReviewModel.addReview(newReview)
      .then(function (review) {
        res.json(review);
      })
  }

  function getReviewForTrcuk(req, res) {
    var trcukId = req.params['truckId'];
    ReviewModel.getreviewByTruckId(trcukId)
      .then(function (review) {
        res.json(review);
      })
  }

}


