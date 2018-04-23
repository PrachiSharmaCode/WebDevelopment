module.exports = function (app) {

  var FoodTruckModel = require("../model/foodTruck/foodtruck.model.server");

  app.post("/foodapi/foodtruck/:userId", createTruck);
  app.get("/foodapi/foodtruck/:truckid", findTruckById);
  app.get("/foodapi/foodtruck/:userId/trucks", findTrucksForOwner);
  app.get("/foodapi/foodtruck/name/:name", findTruckByName);
  app.get("/foodapi/foodtruck/city/:city", findTruckByCity);
  app.get("/foodapi/foodtruck/pin/:pincode", findTruckByPincode);
  app.get("/foodapi/foodtruck/location/:location", findTruckByLocation);
  app.get("/foodapi/foodtruck/ct/:ct", findTruckByCusineTpye);
  app.delete("/foodapi/foodtruck/:userId/trucks/:truckid", deleteTruck);
  app.put("/foodapi/foodtruck/:truckId", updateTruckById);
  // app.get("/foodapi/foodtruck", findUsers);

  // function createTruck(req, res) {
  //   var newTruck = req.body;
  //   FoodTruckModel.createTruck(newTruck)
  //     .then(function (truck) {
  //       res.json(truck);
  //     })
  // }

  function createTruck(req, res) {
    var ownerId = req.params['userId'];
    var newTruck = req.body;
    newTruck.owenrID = ownerId;
    FoodTruckModel.createTruck(newTruck)
      .then(function (user) {
        res.json(user);
      })
  }

  function updateTruckById(req, res) {
    var truckid = req.params['truckId'];
    var newTruck = req.body;
    FoodTruckModel.updateTruck(truckid, newTruck)
      .then(function (truck) {
        res.json(truck)
      })
  }

  function deleteTruck(req, res) {
    var truckId = req.params['truckid'];
    FoodTruckModel.deleteTruck(truckId)
      .then(function (truck) {
        res.json(truck)
      })

  }

  function findTrucksForOwner(req, res) {
    var onweId = req.params['userId'];
    FoodTruckModel.findTruckForOwner(onweId)
      .then(function (trucks) {
        res.json(trucks);
      })
  }

  function findTruckByName(req, res) {
    var name = req.params['name'];
    FoodTruckModel.findTruckByName(name)
      .then(function (user) {
        res.json(user);
      })
  }

  function findTruckByCity(req, res) {
    var city = req.params['city'];
    FoodTruckModel.findTruckByCity(city)
      .then(function (truck) {
        res.json(truck);
      })
  }

  function findTruckByPincode(req, res) {
    var pincode = req.params['pincode'];
    FoodTruckModel.findTruckByPincode(pincode)
      .then(function (truck) {
        res.json(truck);
      })
  }

  function findTruckByLocation(req, res) {
    var location = req.params['location'];
    FoodTruckModel.findTruckByLocation(location)
      .then(function (truck) {
        res.json(truck);
      })
  }

  function findTruckByCusineTpye(req, res) {
    var cusineType = req.params['ct'];
    FoodTruckModel.findTruckByCusineType(cusineType)
      .then(function (truck) {
        res.json(truck);
      })
  }

  function findTruckById(req, res) {
    var truckid = req.params["truckid"]
    FoodTruckModel.findTruckById(truckid).then(function (truck) {
      res.json(truck);
    })
  }

}

//   function findUserById(req, res) {
//     var userId = req.params["userId"]
//     FoodTruckModel.findUserById(userId).then(function (user) {
//       res.json(user);
//     })
//   }
//
//   function findUsers(req, res) {
//     var username = req.query["username"];
//     var password = req.query["password"];
//     if (username && password) {
//       var promise = UserModel.findUserByCredentials(username, password)
//       promise.then(function (user) {
//         res.json(user);
//       });
//       return;
//     }
//   }
//
//   function updateUserById(req, res) {
//     var userId = req.params['userId'];
//     var user = req.body;
//     UserModel.updateUser(userId, user)
//       .then(function (user) {
//         res.json(user)
//       })
//   }
// }
