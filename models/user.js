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
    },
    admin: {
        type: String,
        default: false
    }

}); 

module.exports = mongoose.model('User', UserSchema);