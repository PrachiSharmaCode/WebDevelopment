module.exports = function (app) {
  // var WEBSITES = require("./website.mock.server");

  var websiteModel = require("../model/website/website.model.server");


  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);

  function updateWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    websiteModel.updateWebsite(websiteId, newWebSite)
      .then(function (website) {
        res.json(website)
      })
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params["websiteId"]
    websiteModel.findWebsiteById(websiteId).then(function (website) {
      res.json(website);
    })
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (website) {
        res.json(website)
      })

  }


  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var newWebsite = req.body;
    newWebsite.developerId = userId;
    websiteModel.createWebsite(newWebsite)
      .then(function (user) {
        res.json(user);
      })
  }

  function findWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findWebsiteForUser(userId)
      .then(function (websites) {
        res.json(websites);
      })
  }

}


