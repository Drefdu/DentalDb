const User = require('../models/user');

exports.addUser = async (req,res) => {
    try {
        let user;
        user = new User(req.body);
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}   

exports.getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);    
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.getUid = async (req, res) => {
    try {
        const  uid  = req.params.uid;
        console.log(uid);
        let user = await User.findOne({uid:uid}); // Utilizamos findOne para buscar por el campo uid
        if (!user) {
            return res.send({ msg: "El usuario no existe" });
        }
        
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}


