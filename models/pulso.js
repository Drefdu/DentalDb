const mongoose = require('mongoose');

const PulsoSchema = mongoose.Schema({
    valor: {
        type: String,
        required:true
    }
}); 

module.exports = mongoose.model('Pulso', PulsoSchema);