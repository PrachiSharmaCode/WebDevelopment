// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

let src = '/src/assets';

let login = '/views/user/login.html';
let profile = '/views/user/profile.html';
let resgister = '/views/user/register.html';

let webSiteEdit = '/views/website/website-edit.html';
let webSiteList = '/views/website/website-list.html';
let webSiteNew = '/views/website/website-new.html';

let pageEdit = '/views/pages/page-edit.html';
let pageList = '/views/pages/page-list.html';
let pageNew = '/views/pages/page-new.html';

let widgetChoose = '/views/widget/widget-choose.html';
let widgetHeading = '/views/widget/widget-heading.html';
let widgetImage = '/views/widget/widget-image.html';
let widgetList = '/views/widget/widget-list.html';
let widgetYoutube = '/views/widget/widget-youtube.html';

function requestHandler (req, res, path) {
  path = src+path;
  res.sendFile(__dirname + path);
  //res.send('hello world')
}

app.use(express.static(__dirname + '/src/assets/views/CSS'));

app.get(login, (req, res)=>{ requestHandler(req, res,login);});
app.get(profile, (req, res)=>{ requestHandler(req, res,profile);});
app.get(resgister, (req, res)=>{ requestHandler(req, res,resgister);});

app.get(webSiteList, (req, res)=>{ requestHandler(req, res,webSiteList);});
app.get(webSiteEdit, (req, res)=>{ requestHandler(req, res,webSiteEdit);});
app.get(webSiteNew, (req, res)=>{ requestHandler(req, res,webSiteNew);});

app.get(pageEdit, (req, res)=>{ requestHandler(req, res,pageEdit);});
app.get(pageList, (req, res)=>{ requestHandler(req, res,pageList);});
app.get(pageNew, (req, res)=>{ requestHandler(req, res,webSiteNew);});

app.get(widgetChoose, (req, res)=>{ requestHandler(req, res,widgetChoose);});
app.get(widgetHeading, (req, res)=>{ requestHandler(req, res,widgetHeading);});
app.get(widgetImage, (req, res)=>{ requestHandler(req, res,widgetImage);});
app.get(widgetList, (req, res)=>{ requestHandler(req, res,widgetList);});
app.get(widgetYoutube, (req, res)=>{ requestHandler(req, res,widgetYoutube);});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/assets/index.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/assets/index.html'));
});



server.listen( port , () => console.log('Running on port 3100'));
