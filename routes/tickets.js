var express = require('express');
var router = express.Router();

/* GET tickets page. */
router.get('/', function(req, res, next) {
  res.render('tickets', { title: 'Tickets' });
});

module.exports = router;
