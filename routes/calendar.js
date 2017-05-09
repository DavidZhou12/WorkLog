var express = require('express');
var router = express.Router();

/* GET calendar page. */
router.get('/', function(req, res, next) {
  res.render('calendar', { title: 'Calendar' });
});

module.exports = router;
