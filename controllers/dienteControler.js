const Diente = require("../models/diente");

exports.addDiente = async (req, res) => {
  try {
    let diente;
    diente = new Diente(req.body);
    await diente.save();
    res.send(diente);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.getDiente = async (req, res) => {
  try {
    let number = req.params.dienteId;
    let diente = await Diente.findOne({ Numero: number });
    if (!diente) {
      return res.send({ msg: "El usuario no existe" });
    }
    res.status(200).send(diente);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.updateDiente = async (req, res) => {
  try {
    let number = req.params.dienteId;
    const { Nombre, Tratamiento, Estado, Numero } = req.body;
    let diente = await Diente.findOne({ Numero: number });
    if (!diente) {
      res.status(404).json({ msg: "hubo un error" });
    }
    diente.Nombre = Nombre;
    diente.Tratamiento = Tratamiento;
    diente.Estado = Estado;

    diente = await Diente.findOneAndUpdate({_id: diente._id},diente, {new: true});
    res.json(diente);


  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
