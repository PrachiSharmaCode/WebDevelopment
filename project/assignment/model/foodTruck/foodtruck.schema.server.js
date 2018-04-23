var mongoose = require("mongoose");

var FoodTruckSchema = mongoose.Schema ({
  owenrID: String,
  name : {type: String, required: true},
  location : String,
  from : String,
  to : String,
  city : String,
  pincode: String,
  cusineType: String,
  lat: Number,
  lng: Number
}, {collection: "truck" });

module.exports = FoodTruckSchema;


