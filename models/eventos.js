const mongoose = require("mongoose");

const eventosSchema = mongoose.Schema({
  FichaId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Cita",
  },
  color: {
    type: String,
    default: "#56ca70",
  },
  start: {
    type: Date,
    default: new Date(),
  },
  end: {
    type: Date,
    default: new Date(),
  },
  busy: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: "Cita dentista",
  },
  location: {
    type: String,
    default: "Consultorio",
  },
  aceptado: {
    type: String,
    default: "no"
  }
});

module.exports = mongoose.model("Eventos", eventosSchema);
