var express = require('express');
var router = express.Router();

/* GET notifications page. */
router.get('/', function(req, res, next) {
  res.render('notifications', { title: 'Notifications' });
});

module.exports = router;
