const express = require('express');
const router = express.Router();
const mensajesControler = require('../controllers/mensajesControler');

router.post('/', mensajesControler.addMensaje);
router.get('/', mensajesControler.getMensajes);
router.get("/:id", mensajesControler.getMensajesOneUser);


module.exports = router;