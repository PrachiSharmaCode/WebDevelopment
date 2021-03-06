var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));


//For image rendering from server
app.use('/uploads', express.static(path.join(__dirname, '/assignment/uploads')));


//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
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




