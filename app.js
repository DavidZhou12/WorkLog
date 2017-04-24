var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const calendar = require('./routes/calendar');
const contact = require('./routes/contact');
const guideBackup = require('./routes/guideBackup');
const guideConfigureIpad = require('./routes/guideConfigureIpad');
const guideConfigurePrinter = require('./routes/guideConfigurePrinter');
const guideReimageMac = require('./routes/guideReimageMac');
const guideReimageWindows = require('./routes/guideReimageWindows');
const interns = require('./routes/interns');
const links = require('./routes/links');
const login = require('./routes/login');
const projects = require('./routes/projects');
const teachers = require('./routes/teachers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/calendar', calendar);
app.use('/contact', contact);
app.use('/guideBackup', guideBackup);
app.use('/guideConfigureIpad', guideConfigureIpad);
app.use('/guideConfigurePrinter', guideConfigurePrinter);
app.use('/guideReimageMac', guideReimageMac);
app.use('/guideReimageWindows', guideReimageWindows);
app.use('/interns', interns);
app.use('/links', links);
app.use('/login', login);
app.use('/projects', projects);
app.use('/teachers', teachers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
