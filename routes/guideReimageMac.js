var express = require('express');
var router = express.Router();

/* GET guide page. */
router.get('/', ensureAuthenticated, function(req, res) {
  res.render('guideReimageMac', { title: 'How to Reimage Mac Computers' });
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
