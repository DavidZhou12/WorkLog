var express = require('express');
var router = express.Router();

/* GET links page. */
router.get('/', function(req, res, next) {
  res.render('links', { title: 'Useful Links' });
});

module.exports = router;
