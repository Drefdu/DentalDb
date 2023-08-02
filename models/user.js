const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true 
    },
    displayName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    fichas: {
        type:[],
        default: []
    }

}); 

module.exports = mongoose.model('User', UserSchema);