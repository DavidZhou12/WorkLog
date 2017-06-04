var express = require('express');
var router = express.Router();
const functions = require('./functions.js');

/* GET calendar page. */
router.get('/', functions.ensureAuthenticated, function(req, res) {
	const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const currentDate = new Date();
        const currentMonth = monthName[currentDate.getMonth()];
        const currentDay = currentDate.getDate();
        const currentYear = currentDate.getFullYear();
	res.render('calendar', { title: 'Calendar',
							 month: currentMonth,
							 day: currentDay,
							 year: currentYear
						   });
});

module.exports = router;
