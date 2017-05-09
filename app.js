var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

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
const notifications = require('./routes/notifications');
const projects = require('./routes/projects');
const register = require('./routes/register');
const teachers = require('./routes/teachers');
const tickets = require('./routes/tickets');

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

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

/* Place back if needed
// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});
*/

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
app.use('/notifications', notifications);
app.use('/projects', projects);
app.use('/register', register);
app.use('/teachers', teachers);
app.use('/tickets', tickets);

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
