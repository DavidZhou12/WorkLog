var express = require('express');
var router = express.Router();

/* GET tickets page. */
router.get('/', ensureAuthenticated, function(req, res) {
  res.render('tickets', { title: 'Tickets' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()) {
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/login');
	}
}

module.exports = router;
