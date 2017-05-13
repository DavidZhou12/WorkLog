var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	email: {
		type: String,
		index: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		required: true
	}
});

// Create variable to be accessed outside of this file.
var User = module.exports = mongoose.model('User', UserSchema);

// User functions
module.exports.createUser = function(newUser, callback){
	newUser.admin = false;
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

// The User's email will be the 'username'
module.exports.getUserByUsername = function(username, callback){
	var query = {email: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}