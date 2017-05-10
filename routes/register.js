var express = require('express');
var router = express.Router();

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

	var errors = req.validationErrors();

	if(errors) {
		res.render('register', {
			title: 'Register',
			errors: errors
		});
	} else {
		console.log('PASSED');
	}
});

module.exports = router;
