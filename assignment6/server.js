var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');

var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

const secret = "random";
if(process.env.SECRET){}

app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

//For image rendering from server
app.use('/uploads', express.static(path.join(__dirname, '/assignment/uploads')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", 'https://cs5610-prachisharma.herokuapp.com');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})

const port=process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

require("./assignment/app")(app);

app.set('appPath', 'dist');

app.route('*')
  .get(function (req, res) {
    res.sendfile(app.get('appPath') + '/index.html');
  });

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});




