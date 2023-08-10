const Ficha = require("../models/ficha");

exports.addFicha = async (req, res) => {
  try {
    let ficha;
    ficha = new Ficha(req.body);
    await ficha.save();
    res.send(ficha);
  } catch (error) {
    console.log(error);
  }
};

exports.getFichas = async (req, res) => {
  try {
    const UserId = req.params.UserId;
    const ficha = await Ficha.find({UserId:UserId});
    res.json(ficha);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

exports.getAllFichas = async (req, res) => {
  try {
    const fichas = await Ficha.find();
    res.json(fichas);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
}

exports.deleteFicha = async (req, res) => {
  try {
    const _id = req.params._id;
    await Ficha.deleteOne({_id:_id});
    return res.send({ msg: "Borrado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
}

exports.getFicha = async (req, res) => {
  try {
    const _id = req.params._id;
    console.log(_id);
    let ficha = await Ficha.findById({ _id: _id }); // Utilizamos findOne para buscar por el campo uid
    if (!ficha) {
      return res.send({ msg: "El usuario no existe" });
    }

    res.send(ficha);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.updateFicha = async (req, res) => {
  try {
    const {
      Nombre,
      Correo,
      Apellidos,
      Sexo,
      Edad,
      Altura,
      Peso,
      Telefono,
      AntecedentesHereditarios,
      ETS,
      ED,
      EC,
      OP,
      LimpDientes,
      auxHigiene,
      dulces,
      adicciones,
      alergias,
    } = req.body;

    let ficha = await Ficha.findById(req.params._id);

    if(!ficha){
        res.status(404).json({msg: "hubo un error"});
    }

    ficha.Nombre = Nombre;
    ficha.Correo = Correo;
    ficha.Apellidos = Apellidos;
    ficha.Sexo = Sexo;
    ficha.Edad = Edad;
    ficha.Altura = Altura;
    ficha.Peso = Peso;
    ficha.Telefono = Telefono;
    ficha.AntecedentesHereditarios = AntecedentesHereditarios;
    ficha.ETS = ETS;
    ficha.ED = ED,
    ficha.EC = EC;
    ficha.OP = OP;
    ficha.LimpDientes = LimpDientes;
    ficha.auxHigiene = auxHigiene;
    ficha.dulces = dulces;
    ficha.adicciones =adicciones;
    ficha.alergias = alergias;

    ficha = await Ficha.findOneAndUpdate({_id: req.params._id},ficha, {new: true});
    res.json(ficha);

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

