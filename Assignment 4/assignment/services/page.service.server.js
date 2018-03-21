module.exports = function (app) {


  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);


  var Pages = [
    {_id: '321', name: 'page321', websiteId: '321', title: 'test page 321'},
    {_id: '111', name: 'page111', websiteId:'111',  title:'test page 111'},
    {_id: '222', name: 'page222', websiteId:'222',  title:'test page 222'},
    {_id: '333', name: 'page3', websiteId:'333',  title:'test page 333'},
    {_id: '432', name: 'page432', websiteId:'432',  title:'test page 432'},
    {_id: '234', name: 'page234', websiteId:'234',  title:'test page 234'}
  ];

  function findPageById(req, res){
    var websiteId = req.params['pageId'];
    res.json(getWebsiteById(websiteId));
  }

  function getWebsiteById(pageId){
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        return Pages[i];
      }
    }
  }

  function findAllPagesForWebsite(req, res) {
    console.log("Inside app.js")
    var websiteId = req.params['websiteId'];
    var pages= getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function  getPagesForWebsiteId(websiteId) {
    var PAGES=[];

    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i].websiteId === websiteId ) {
        PAGES.push(Pages[i]);
      }
    }
    return PAGES;
  }

  function updatePage(req, res){
    //var userId = req.params['userId'];
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        Pages[i] = newPage;
        break;
      }
    }
    res.json(newPage);
  }

  function deletePage(req, res){
    var pageId = req.params['pageId'];
    var websiteId = req.params['wid'];
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        Pages.splice(i, 1);
       var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }

  }

  function createPage(req, res){
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    Pages.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

}
