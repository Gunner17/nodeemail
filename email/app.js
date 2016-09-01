var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require("./config");
var setupController = require("./controllers/SetupController");
var apiController = require("./controllers/ApiController"); 

var port = process.env.PORT || 3000;

//for static resource access
app.use( "/assets", express.static(__dirname + "/public") );



//for server side templating, not needed for this example..
app.set("view engine", "ejs");

//listen to the port for requests
app.listen(port);

//connect to the mongoose database
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);
