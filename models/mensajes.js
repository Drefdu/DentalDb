const mongoose = require('mongoose');

const MensajeSchema = mongoose.Schema({
    senderId: {
        type: String,
        required: true 
    },
    recipeId:{
        type: String,
        required: true
    },  
    text: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    incoming: {
        type: Boolean,
        require: false
    }
}); 

module.exports = mongoose.model('Mensaje', MensajeSchema);