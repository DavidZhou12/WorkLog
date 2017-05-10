var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Connect to the DB
mongoose.connect('mongodb://localhost/worklog');
var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	email: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	name: {
		type: String
	}
});

// Create variable to be accessed outside of this file.
var User = module.exports = mongoose.model('User', UserSchema);

// User functions
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}