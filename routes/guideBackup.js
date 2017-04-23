var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('guideBackup', { title: 'How to Backup Computers' });
});

module.exports = router;
