const Cita = require('../models/citas');

exports.addCita = async (req, res) => {
    try {
        let cita;
        cita = new Cita(req.body);
        await cita.save();
        res.send(cita);
    } catch (error) {
        console.log(error);
    }
}

exports.getCitas = async (req, res) => {
    try {
        const citas = await Cita.find();
        if(!citas){
            res.status(404).json({msg: "hubo un error"});
        }
        res.json(citas);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.deleteCita = async (req, res) => {
    try {
        const _id = req.params._id;
        await Cita.deleteOne({_id:_id});
        return res.send({ msg: "Borrado con exito" });
    } catch (error) {
        console.log(error);
    }
}

exports.updateCita = async (req, res) => {
    try {
        const {Fecha, Hora} = req.body;
        let cita = await Cita.findById(req.params._id);
        if(!cita){
            res.status(404).json({msg: "hubo un error"});
        }
        cita.Fecha = Fecha;
        cita.Hora = Hora;
        cita = await Cita.findOneAndUpdate({_id: req.params._id}, cita, {new:true});
        res.json(cita);
    } catch (error) {
        console.log(error);
    }
}