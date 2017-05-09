var express = require('express');
var router = express.Router();

/* GET guide page. */
router.get('/', function(req, res, next) {
  res.render('guideReimageMac', { title: 'How to Reimage Mac Computers' });
});

module.exports = router;
