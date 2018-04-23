var mongoose = require("mongoose");
var FoodTruckSchema = require("./foodtruck.schema.server");

var FoodTruckModel = mongoose.model("FoodTruckModel", FoodTruckSchema);

FoodTruckModel.findTruckById = findTruckById;
FoodTruckModel.createTruck = createTruck;
FoodTruckModel.updateTruck = updateTruck;
FoodTruckModel.findTruckByName = findTruckByName;
FoodTruckModel.findTruckByCity = findTruckByCity;
FoodTruckModel.findTruckByPincode = findTruckByPincode;
FoodTruckModel.findTruckByLocation = findTruckByLocation;
FoodTruckModel.findTruckByCusineType = findTruckByCusineType;
FoodTruckModel.findTruckForOwner = findTruckForOwner;
FoodTruckModel.deleteTruck = deleteTruck;

module.exports = FoodTruckModel;


function deleteTruck(truckid) {
  return FoodTruckModel.deleteOne({_id: truckid})
}

function updateTruck(truckId,truck) {
  return FoodTruckModel.updateOne({_id:truckId},truck)
}

function findTruckById(truckId){
  return FoodTruckModel.findById(truckId);
}

function findTruckForOwner(userId) {
  return FoodTruckModel.find({owenrID: userId});
}

function createTruck(truck){
  return FoodTruckModel.create(truck);
}

function findTruckByCity(city) {
  return FoodTruckModel.find({city: city});
}

function findTruckByPincode(pincode) {
  return FoodTruckModel.find({pincode: pincode});
}

function findTruckByLocation(location) {
  return FoodTruckModel.find({location: location});
}

function findTruckByCusineType(cusineType) {
  return FoodTruckModel.find({cusineType: cusineType});
}

function findTruckByName(name) {
  return FoodTruckModel.find({name: name});
}





