var express = require('express');
var router = express.Router();

/* GET guide page. */
router.get('/', function(req, res, next) {
  res.render('guideBackup', { title: 'How to Backup Computers' });
});

module.exports = router;
