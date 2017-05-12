var express = require('express');
var router = express.Router();

/* GET links page. */
router.get('/', ensureAuthenticated, function(req, res) {
  res.render('links', { title: 'Useful Links' });
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
