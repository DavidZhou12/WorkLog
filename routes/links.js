var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET links page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('links', { title: 'Useful Links' });
});

module.exports = router;
