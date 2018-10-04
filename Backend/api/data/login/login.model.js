const bcrypt  = require('bcryptjs');
const mongoose = require('mongoose');
const userModel = require ('../user/user.model');


module.exports.findByUserEmail = function(email,callback){

    const query = {email:email};
    userModel.User.findOne(query,callback);
};

module.exports.passwordCheck = function(plainpassword,hash,callback){

    bcrypt.compare(plainpassword, hash, function(err, res) {
        if(err) throw  err;

        if (res){
            callback(null,res);
        } else{
            callback(null,false)
        }
});
    
};