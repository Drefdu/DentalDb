const mongoose = require('mongoose');

const DienteSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required:true
    },
    Tratamiento: {
        type: String,
        required: true
    },
    Estado: {
        type:String,
        required:true
    },
    Numero: {
        type: Number,
        required: true
    }
}); 

module.exports = mongoose.model('Dientes', DienteSchema);