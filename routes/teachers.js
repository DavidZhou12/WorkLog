var express = require('express');
var router = express.Router();

/* GET teachers page. */
router.get('/', function(req, res, next) {
  res.render('teachers', { title: 'Teachers' });
});

module.exports = router;
