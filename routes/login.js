var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Get User Model
var User = require('../models/user');

/* GET login page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

passport.use(new LocalStrategy(
	function(username, password, done) {
	User.getUserByUsername(username, function(err, user){
		if(err) throw err;
		if(!user){
			return done(null, false, {message: 'Unable to find a user with this email address. Please try again.'});
		}

		User.comparePassword(password, user.password, function(err, isMatch){
			if(err) throw err;
			if(isMatch && user.admin == false) {
				return done(null, false, {message: "System administrators has not yet approved your account. Please try again later."})
			} else if(isMatch){
				return done(null, user);
			} else {
				return done(null, false, {message: 'Invalid password'});
			}
		});
	});
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.getUserById(id, function(err, user) {
		done(err, user);
	});
});

router.post('/',
	passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}),
	function(req, res) {
		res.redirect('/');
	}
);

router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success_msg', 'You have successfully signed out.');
	res.redirect('/login');
});

module.exports = router;
