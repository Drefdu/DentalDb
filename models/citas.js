const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    FichaId: {
        type: String,
        required: true 
    },
    Motivo: {
        type: String,
        required: true 
    },
    Fecha: {
        type: String,
        required: true
    },
    Hora: {
        type: String,
        required: true
    }
}); 

module.exports = mongoose.model('Citas', CitaSchema);