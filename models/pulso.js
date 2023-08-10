const mongoose = require('mongoose');

const PulsoSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        required: true 
    }
}); 

module.exports = mongoose.model('Pulso', PulsoSchema);