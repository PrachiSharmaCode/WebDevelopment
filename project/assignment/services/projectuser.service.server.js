module.exports = function (app) {

  var UserModel = require("../model/projectUser/projectuser.model.server");

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require("bcrypt");

  app.post('/projectapi/login', passport.authenticate('local'), login);
  app.post("/projectapi/projectuser", createUser);
  app.put("/projectapi/projectuser/:userId", updateUserById);
  app.get("/projectapi/projectuser/:userId", findUserById)
  app.get("/projectapi/projectuser", findUsers);
  app.post('/projectapi/register', register);

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function createUser(req, res) {
    var newUser = req.body;
    UserModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      })
  }

  function localStrategy(username, password, done) {
    console.log("inside LS");
    UserModel
      .findUserName(username)
      .then(
        function(user) {
          if(user === null){
            console.log('usernull');
          }

          if(user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    UserModel
      .findUserById(user._id)
      .then(function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
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


  function register(req, res) {
    var user = req.body;
    let salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    UserModel
      .findUserName(user.username)
      .then(function (data) {
        if(data){
          res.status(400).send('Username is in use!');
          return;
        } else{
          UserModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.status(400).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })
  }

}
