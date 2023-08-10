const Evento = require("../models/eventos");

exports.addEvento = async (req, res) => {
    try {
        let evento;
        evento = new Evento(req.body);
        await evento.save();
        res.send(evento);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.getEventos = async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.json(eventos);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.deleteEventos = async (req, res) => {
    try {
        const _id = req.params._id;
        await Evento.deleteOne({_id:_id});
        return res.send({ msg: "Borrado con exito" });
    } catch (error) {
        console.log(error);
    }
}

exports.updateEvento = async (req, res)  => {
    try {
        const {start, end, aceptado, title, color, busy, description, location} = req.body;
        let evento = await Evento.findById(req.params._id)
        if(!evento){
            res.status(404).json({msg: "hubo un error"});
        }
        evento.start = start;
        evento.end = end;
        evento.aceptado = aceptado;
        evento.title = title;
        evento.color = color;
        evento.busy = busy;
        evento.description = description;
        evento.location = location;
        evento = await Evento.findOneAndUpdate({_id: req.params._id}, evento, {new: true});
        res.json(evento);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}