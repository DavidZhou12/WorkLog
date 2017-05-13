var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET homepage. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('index', { title: 'Dashboard' });
});

module.exports = router;
