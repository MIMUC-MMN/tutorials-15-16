var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// first include the config module, that you will need
// to adjust to make this work with your own setup.
var config = require('./config');
// now create a connection to the database
// we will attach the db object to all incoming requests,
// so that any middleware function can access the same connection.
var db = require('monk')(config.mongoURL);


var routes = require('./routes/index');
var users = require('./routes/users');


function databaseAccess(req,res,next){
  req.db = db;
  next();
}



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






// before we include any of our own routes/modules
// we should attach the database connection object
// to the request object, which we do here:
app.use(function(req,res,next){
  // we modify the request object
  req.db = db;
  // then we simply call the next function in the middleware chain.
  next();
});

app.use('/', routes);
app.use('/users', users);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
