var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var lib = require('./lib');
lib.routes = require('express-routify')(app, {
	routeOpts : {lib: lib, app: app}
	//,excludeFiles : [],       //can be either string file names, or regex expressions matched again full file path
	//,mountPath: '/'  //default
	//,routesPath : 'routes'  //default
	//,recursive : true //default
});

//404 errors
require('./middleware/not-found')(app);

/// error handlers
require('./middleware/error-handler')(app);


module.exports = app;
