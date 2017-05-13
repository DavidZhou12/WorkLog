var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET projects page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
