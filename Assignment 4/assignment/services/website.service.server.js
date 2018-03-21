module.exports = function(app){
 // var WEBSITES = require("./website.mock.server");

  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);


  var WEBSITES = [
    {_id: "321", name: "Facebook", developerId: "123", description:"this is desciption"},
    {_id: "432", name: "Twitter", developerId: "234", description:"this is desciption"},
    {_id: "234", name: "Amazon", developerId: "345", description:"this is desciption"},
    {_id: "333", name: "MyWebSite", developerId: "123", description:"this is desciption"}
  ];

  function updateWebsiteById(req, res){
    //var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES[i] = newWebSite;
        break;
      }
    }
    res.json(newWebSite);
  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function deleteWebsite(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES.splice(i, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }

  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website._id = (new Date()).getTime() + "";
    website.developerId = userId;
    WEBSITES.push(website);
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  function findWebsiteForUser(req, res) {
    console.log("Inside app.js")
    var userId = req.params['userId'];
    var websites= getWebsitesForUserId(userId);
    console.log("Inside app.js list"+websites.length);
    res.json(websites);
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}


