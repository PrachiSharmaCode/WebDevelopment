module.exports = function (app) {

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUserById);
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  app.get("/api/user", findUsers);

  var users = [
    {_id: "123", username: "alice", password: "alice", email: "gdf.com", firstName: "Alice", lastName: "Wonderland"},
    {_id: "234", username: "bob", password: "bob", email: "gdf.com", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", email: "gdf.com", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", email: "gdf.com", firstName: "Jose", lastName: "Annunzi"}
  ];

  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUser(req, res){
    var user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    res.json(user);
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }


  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];

    console.log(username);
    console.log(password);

    var user = null;

    if (username && password) {
      user = users.find(function (user) {
        if(user.username === username && user.password === password)
        return user;
      });
    }
    res.json(user);
  }

  function updateUserById(req, res) {
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].username = user.username;
        users[i].password = user.password;
        users[i].email = user.email;
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return this.users;
      }
    }
    res.status(404).send("not found!");
  }
}
