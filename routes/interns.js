var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET interns page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('interns', { title: 'Interns' });
});

module.exports = router;
