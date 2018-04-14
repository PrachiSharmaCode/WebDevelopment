module.exports = function (app, models) {

  var widgetModel = require("../model/widget/widget.model.server")
  var path = require('path');
  var multer = require('multer'); // npm install multer --save
  var upload = multer({dest: __dirname + '/../uploads'});

  app.get("/api/page/:pageId/widget", findWidgetForPage);
  app.post("/api/page/:pageId/widget", createWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidgteById);
  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.put("/api/page/:pageId/widget", reorderWidgets);

  function uploadImage(req, res) {

    var widgetId = req.body.widgetId;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    widget = widgetModel.findWidgetById(widgetId).then(function (respons) {
      res.json(respons)
    })
    if (widget._id === undefined) {
      const newWidget = {
        widgetType: 'IMAGE',
        url: "https://cs5610-prachisharma.herokuapp.com/uploads/" + filename,
        page: pageId
      };

      widgetModel.createWidget(newWidget).then(function (respon) {
        res.json(respon)
      })
    }
    else {

      widget.url = "https://cs5610-prachisharma.herokuapp.com/uploads/" + filename;

      widgetModel.updateWidget(widgetId, widget)
        .then(function (response) {
          res.json(response)
        })
    }

    var callbackUrl = "https://cs5610-prachisharma.herokuapp.com/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget";

    res.redirect(callbackUrl);
  }


  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget)
      })
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function (widget) {
        res.json(widget)
      })
  }

  function findWidgetForPage(req, res) {
    var pageId = req.params['pageId'];
    widgetModel.findWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets)
      })
  }


  function updateWidgteById(req, res) {
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    widgetModel.updateWidget(widgetId, newWidget)
      .then(function (widget) {
        res.json(widget)
      })
  }

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var newWidget = req.body;
    newWidget.page = pageId;
    widgetModel.createWidget(newWidget)
      .then(function (wid) {
        res.json(wid);
      })
  }

  function reorderWidgets(req, res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (stats) {
        res.send(200);

      }, function (err) {
        res.sendStatus(400).send(err);
      });

  }

}


