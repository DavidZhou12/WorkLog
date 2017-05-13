var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET teachers page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('teachers', { title: 'Teachers' });
});

module.exports = router;
