var express = require('express');
var router = express.Router();

/* GET registration page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password1 = req.body.password1;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();

	var errors = req.validationErrors();

	if(errors) {
		console.log('YES');
	} else {
		console.log('NO');
	}
});

module.exports = router;
