var express = require('express');
var router = express.Router();

// Get User Model
var User = require('../models/user');

/* GET registration page. */
router.get('/', function(req, res, next) {
	var errors;
	res.render('register', {
		title: 'Register',
		errors: errors
	});
});

router.post('/', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var password1 = req.body.password1;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('name', 'Name is required.').notEmpty();
	req.checkBody('email', 'Email is required.').isEmail();
	req.checkBody('password1', 'Password is required.').notEmpty();
	req.checkBody('password2', 'Passwords do not match.').equals(req.body.password1);

	// Check for errors in form
	var errors = req.validationErrors();
	if(errors) {
		res.render('register', {
			title: 'Register',
			errors: errors
		});
	} else {	// Add user to database
		var newUser = new User({
			name: name,
			email: email,
			password: password1,
			admin: false
		});

		User.createUser(newUser, function(err, user) {
			if (err) throw err;
		});

		req.flash('success_msg', 'You are registered. Please wait for system administrators to approve your account before you may login.');
		res.redirect('/login');
	}
});

module.exports = router;
