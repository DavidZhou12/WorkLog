var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('guideReimageWindows', { title: 'How to Reimage Windows Computers' });
});

module.exports = router;