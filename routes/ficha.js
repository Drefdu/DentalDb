const express = require('express');
const router = express.Router();
const fichaControler = require('../controllers/fichaControler');


router.post('/', fichaControler.addFicha);
router.get('/', fichaControler.getFichas);
router.get('/:_id', fichaControler.getFicha);
router.put('/:_id',fichaControler.updateFicha);

module.exports = router;