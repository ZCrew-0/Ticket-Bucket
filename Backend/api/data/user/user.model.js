const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');
var User =  mongoose.model('User', {
    fname : {
        type:String,
        required:true
    }, 
    lname : {
        type:String,
        required:true
    },
    username:{
        type:String,
		required:true
    },
    password : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    telephone : [String],
    address:{
        type:String,
    },
    isadmin:{
        type:Boolean,
    },
    profilepic:{
        type:String,
    },
    usertype : {
        type:String,
        required:true
    },

},'users');

module.exports = { User };


module.exports.saveUser = function (newUser,callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;

            if (err) throw err;
            newUser.save(callback);
        });
    });
};

