var express = require('express');
var router = express.Router();

/* GET guide page. */
router.get('/', function(req, res, next) {
  res.render('guideConfigureIpad', { title: 'How to Configure iPads' });
});

module.exports = router;
