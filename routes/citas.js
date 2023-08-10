const express = require('express');
const router = express.Router();
const citasControler = require('../controllers/citaControler');

router.post('/', citasControler.addCita);
router.get('/', citasControler.getCitas);
router.put('/:_id', citasControler.updateCita);
router.delete('/:_id', citasControler.deleteCita);


module.exports = router;