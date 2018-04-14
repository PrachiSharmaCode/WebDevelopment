module.exports = function (app) {

  var UserModel = require("../model/user/user.model.server");

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUserById);
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  app.get("/api/user", findUsers);


  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUser(req, res) {
    var newUser = req.body;
    UserModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      })
  }

  function findUserById(req, res) {
    var userId = req.params["userId"]
    UserModel.findUserById(userId).then(function (user) {
      res.json(user);
    })
  }


  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var promise = UserModel.findUserByCredentials(username, password)
      promise.then(function (user) {
        res.json(user);
      });
      return;
    }
  }

  function updateUserById(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    UserModel.updateUser(userId, user)
      .then(function (user) {
        res.json(user)
      })
  }
}

funtion
