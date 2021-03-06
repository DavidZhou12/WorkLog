var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Register
router.get('/register', function(req, res) {
	res.render('register', { title: 'Register' })
});

// Login
router.get('/login', function(req, res) {
	res.render('login', { title: 'Login' });
});

module.exports = router;
