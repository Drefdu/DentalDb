const Foto = require('../models/foto');

exports.addFoto = async (req, res) => {
    try {
        let foto;
        foto = new Foto(req.body);
        await foto.save();
        res.send(foto);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.getFotos = async (req, res) => {
    try {const FichaId = req.params.FichaId;
        const fotos = await Foto.find({FichaId:FichaId});
        res.send(fotos);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.deleteFoto = async (req, res) => {
    try {
        const _id = req.params._id;
        await Foto.deleteOne({_id:_id});
        return res.send({ msg: "Borrado con exito" });
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}