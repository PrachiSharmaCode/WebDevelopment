module.exports = function (app) {

  var pageModel = require("../model/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);


  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      })
  }

  function findAllPagesForWebsite(req, res) {
    console.log("Inside app.js")
    var websiteId = req.params['websiteId'];
    pageModel.findPageForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      })
  }


  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var newPage = req.body;
    pageModel.updateWebsite(pageId, newPage)
      .then(function (page) {
        res.json(page)
      })
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    pageModel.deleteWebsite(pageId)
      .then(function (page) {
        res.json(page)
      })
  }

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var newpage = req.body;
    newpage.websiteId = websiteId;
    pageModel.createPage(newpage)
      .then(function (page) {
        res.json(page);
      })
  }

}
