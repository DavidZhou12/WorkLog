var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET calendar page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('calendar', { title: 'Calendar' });
});

module.exports = router;
