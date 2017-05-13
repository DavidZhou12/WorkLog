var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET guide page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('guideReimageMac', { title: 'How to Reimage Mac Computers' });
});

module.exports = router;
