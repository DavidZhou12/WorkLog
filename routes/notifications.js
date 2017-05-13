var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET notifications page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
  res.render('notifications', { title: 'Notifications' });
});

module.exports = router;
