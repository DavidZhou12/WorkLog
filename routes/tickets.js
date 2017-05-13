var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET tickets page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('tickets', { title: 'Tickets' });
});

module.exports = router;
