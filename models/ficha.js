const mongoose = require('mongoose');

const FichaSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Apellidos: {
        type: String,
        required: true
    },
    Sexo: {
        type: String,
        required: false
    },
    Edad: {
        type: Number,
        required: true
    },
    Altura:{
        type: Number,
        required: false
    },
    Peso:{
        type: String,
        required: false
    },
    Telefono:{
        type: String,
        required: false
    },
    AntecedentesHereditarios:{
        type: String,
        required: false
    },
    ETS:{
        type: String,
        required: false
    },
    ED:{
        type: String,
        required: false
    },
    EC:{
        type: String,
        required: false
    },
    OP:{
        type: String,
        required: false
    },
    LimpDientes: {
        type: String,
        required: false
    },
    auxHigiene: {
        type: String,
        required: false
    },
    dulces: {
        type: String,
        required: false
    },
    adicciones: {
        type: String,
        required: false
    },
    alergias: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Ficha', FichaSchema);