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
    const FichaId = req.params.id;
    let pulso = await Pulso.findOne({ FichaId: FichaId });
    if (!pulso) {
      return res.send({ msg: "El usuario no existe" });
    }
    res.status(200).send(pulso);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.getPulsos = async (req, res) => {
  try {
    let pulso = await Pulso.find();
    res.status(200).send(pulso);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.updatePulso = async (req, res) => {
  try {
    const { valor } = req.body;
    let pulso = await Pulso.findOne();

    if (!pulso) {
      res.status(404).json({ msg: "hubo un error" });
    }
    
    pulso.valor = valor;
    pulso = await Pulso.findOneAndUpdate({_id: pulso._id},pulso, {new: true});
    res.json(pulso);

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
