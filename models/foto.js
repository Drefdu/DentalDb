const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    FichaId: {
        type: String,
        required: true 
    },
    Fecha: {
        type: Date,
        default: Date.now()
    },
    Foto: {
        type: String,
        required: true
    }
}); 

module.exports = mongoose.model('Fotos', CitaSchema);