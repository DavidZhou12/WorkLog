var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET guide page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('guideConfigurePrinter', { title: 'How to Configure Printers' });
});

module.exports = router;
