module.exports = function (app) {

  var UserModel = require("../model/user/user.model.server");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt");

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUserById);
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  app.get("/api/user", findUsers);
  app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  var facebookConfig = {
    clientID     : '424155664690195',
    clientSecret : 'd8aeb09291d97c2b44b9993c30519c57',
    callbackURL  : 'https://cs5610-prachisharma.herokuapp.com/auth/facebook/callback'
  };

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

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

  function facebookStrategy(token, refreshToken, profile, done) {
    UserModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName: names[1],
              firstName: names[0],
              username: 'user'+ names[0],
              email: profile.emails ? profile.emails[0].value : "",
              facebook: {
                id: profile.id,
                token: token
              }
            };
            return UserModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }


  function facebookLogin(token, refreshToken, profile, done) {
    //check if the fb user already exists in our DB

    console.log("inside fb login")
    UserModel
      .findFacebookUser(profile.id)
      .then(
        function (facebookUser) {
          // we arent validating, but checking if the user exists
          // only in local strategies we do validation here
          if (facebookUser) {
            return done(null, facebookUser);
          } else {
            //if th euser doesnt exist, we create here
            facebookUser = {
              username: profile.displayName.replace(/ /g, ''),
              facebook: {
                token: token,
                id: profile.id,
                displayName: profile.displayName
              }
            }
          }
          userModel
            .createUser(facebookUser)
            .then(
              function (user) {
                done(null, user);
              }
            );
        }
      );
  }

  // function register (req, res) {
  //   var user = req.body;
  //   let salt = bcrypt.genSaltSync(10);
  //   user.password = bcrypt.hashSync(user.password,salt);
  //   if(UserModel.findUserByUsername(user.username) === null){
  //     UserModel
  //       .createUser(user)
  //       .then(
  //         function(user){
  //           if(user){
  //             req.login(user, function(err) {
  //               if(err) {
  //                 res.status(400).send(err);
  //               } else {
  //                 res.json(user);
  //               }
  //             });
  //           }
  //         }
  //       );
  //   }
  //   else{
  //     res.status(400).send('Username is in use!');
  //  }
  //
  // }


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

function logout(req, res) {
    req.logOut();
    res.send(200);
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

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

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
