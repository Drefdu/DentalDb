const Pulso = require("../models/pulso");

exports.addPulso = async (req, res) => {
  try {
    let pulso;
    pulso = new Pulso(req.body);
    await pulso.save();
    res.send(pulso);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.getPulso = async (req, res) => {
  try {
    const id = req.params.id;
    let pulso = await Pulso.findOne({ id: id });
    if (!pulso) {
      return res.send({ msg: "El usuario no existe" });
    }
    res.status(200).send(pulso);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
