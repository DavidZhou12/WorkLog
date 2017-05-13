var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET contact page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('contact', { title: 'Contact Us!' });
});

module.exports = router;
