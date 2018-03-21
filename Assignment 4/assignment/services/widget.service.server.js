module.exports = function(app, models){

  var path = require('path');
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../uploads'  });

  app.get("/api/page/:pageId/widget", findWidgetForPage);
  app.post("/api/page/:pageId/widget", createWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidgteById);

  app.get("/api/image/:imageName", uploadImageByImagename);

  function uploadImageByImagename(req, res) {
    var imageName = req.params.imageName;
    res.sendFile(path.resolve("./assignment/uploads/" + imageName));
  }


  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var WIDGETS = [
    { _id: "765", widgetType: "YOUTUBE", pageId:"321", size: 1,
      text: "This is a iframe", url: "https://www.youtube.com/embed/zJAOtGUAKYY",
      width:"100%",rows:0, name: "name", placeholder: "text here",formatted:false},

    { _id: "706", widgetType: "TEXT", pageId:"321", size: 1,
      text: "This is a TEXT", url: "",
      width:"100%",rows:2, name: "name", placeholder: "text here",formatted:true},

    { _id: "705", widgetType: "HTML", pageId:"321", size: 1,
      text: "This is a HTML", url: "",
      width:"100%",rows:2, name: "name", placeholder: "text here",formatted:false},

    { _id: "654", widgetType: "HEADER", pageId:"111",size: 1,
      text: "This is a paragraph", url: "", width:"100%",rows:0,
      name: "name", placeholder: "text here",formatted:false},

    { _id: "123", widgetType: "HEADER", pageId:"321", size: 1,
      text: "GIZMODO", url: "", width:"100%",rows:0,
      name: "name", placeholder: "text here",formatted:false},

    { _id: "234", widgetType: "HEADER",pageId:"333", size: 2,
      text: "Lorem ipsum", url:"", width:"100%" ,rows:0,
      name: "name", placeholder: "text here",formatted:false},

    { _id: "345", widgetType: "IMAGE", pageId:"424", size: 3,
      text: "testing 3", url: "", width:"100%" ,rows:0,
      name: "name", placeholder: "text here",formatted:false},

    { _id: "456", widgetType: "IMAGE", pageId:"234",size: 4,
      text: "testing 4", url: "", width:"100%",rows:0,
      name: "name", placeholder: "text here",formatted:false}
  ];


  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    console.log(" on "+originalname);
    console.log(" fn "+filename);
    console.log(" path "+path);
    console.log(" destination "+destination);
    console.log(" size "+ size);
    console.log(" m "+mimetype);
    console.log(req.protocol);

    console.log("PageId:" + pageId);

    widget = getWebsiteById(widgetId);
    if(widget === undefined){
      var wid = { _id: widgetId, widgetType: "IMAGE", pageId:pageId, size: 1,
        text: "This is a iframe", url: filename,
        width:"100%",rows:0, name: "name", placeholder: "text here",formatted:false};

      WIDGETS.push(wid);
    }
    else{
      widget.url = filename;
    }

    var callbackUrl = "https://cs5610-prachisharma.herokuapp.com/profile/"+userId+"/website/"+websiteId+"/page/" + pageId + "/widget";

    //var callbackUrl = "http://localhost:4200/profile/"+userId+"/website/"+websiteId+"/page/" + pageId + "/widget";

    res.redirect(callbackUrl);
  }


  function findWidgetById(req, res){
    var websiteId = req.params['widgetId'];
    res.json(getWebsiteById(websiteId));
  }

  function getWebsiteById(widgetId){
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        return WIDGETS[i];
      }
    }
  }

  function deleteWidget(req, res){
    var widgetId = req.params['widgetId'];
    var pageId = req.params['pid'];
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS.splice(i, 1);
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }

  function findWidgetForPage(req, res) {
    console.log("Inside app.js")
    var pageId = req.params['pageId'];
    console.log("pageId: " + pageId);
    var widgets= getWidgetsForPageId(pageId);
    console.log("Inside app.js list"+widgets.length);
    res.json(widgets);
  }

  function  getWidgetsForPageId(pageId) {
    var widgets = [];

    console.log("before wodgets: "+ widgets)
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    console.log("after wodgets: "+ widgets)
    return widgets;
  }

  function updateWidgteById(req, res){
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS[i] = newWidget;
        break;
      }
    }
    res.json(newWidget);
  }

  function createWidget(req, res){
    var pageId = req.params['pageId'];
    var widget = req.body;
    widget._id = (new Date()).getTime() + "";
    widget.pageId = pageId;
    WIDGETS.push(widget);
    var wids = getWidgetsForPageId(pageId);
    res.json(wids);
  }

}
