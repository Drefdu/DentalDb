const Mensaje = require("../models/mensajes");

exports.addMensaje = async (req, res) => {
  try {
    let mensaje;
    mensaje = new Mensaje(req.body);
    await mensaje.save();
    res.send(mensaje);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.getMensajes = async (req, res) => {
  try {
    const mensajes = await Mensaje.find();
    if (!mensajes) {
      return res.send({ msg: "El usuario no existe" });
    }
    res.json(mensajes);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.getMensajesOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    let mensajes = await Mensaje.find({recipeId:id})
    if (!mensajes) {
      return res.send({ msg: "El usuario no existe" });
    }
    res.json(mensajes);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};
