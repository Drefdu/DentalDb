const express = require('express');
const router = express.Router();
const eventosControler =  require('../controllers/eventosControler');

router.get('/', eventosControler.getEventos);
router.post('/', eventosControler.addEvento);
router.delete('/:_id', eventosControler.deleteEventos);
router.put('/:_id', eventosControler.updateEvento);

module.exports = router;