var express = require('express');
var router = express.Router();

/* GET guide page. */
router.get('/', function(req, res, next) {
  res.render('guideConfigurePrinter', { title: 'How to Configure Printers' });
});

module.exports = router;
