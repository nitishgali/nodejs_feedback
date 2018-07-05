var createError = require('http-errors');
var express = require('express');
var path = require('path')
;var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var orm = require('orm');
var hbs = require('express-handlebars');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var restDemo = require('./routes/restDemo');
var restDemo1 = require('./routes/restDemo1');
var studentRouter = require('./routes/student');
var personRouter = require('./routes/person');
var feedStatusUpdate = require('./routes/updatestatus');

var app = express();
var mysqlConnectionObj = require("./config/mysqlConfig");
app.use(mysqlConnectionObj);
//console.log("mysql" + mysqlConnectionObj);

 var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '1234',
   database: 'db'
});

app.use(function (req, res, next) {
     req.prototype = {mysqlDB:connection};
     next();
 });

// view engine setup
//app.engine('hbs',hbs({extname: 'hbs',defaultLayout: 'layout',layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(expressSession({secret:'max',saveUnintialized: false,reSave: false}));
app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/person',personRouter);
app.use('/restDemo',restDemo);
app.use('/restDemo1',restDemo1);
app.use('/updatestatus',feedStatusUpdate);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
