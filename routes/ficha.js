const express = require('express');
const router = express.Router();
const fichaControler = require('../controllers/fichaControler');


router.post('/', fichaControler.addFicha);
router.get('/', fichaControler.getAllFichas);
router.get('/:UserId', fichaControler.getFichas);
router.get('/ficha/:_id', fichaControler.getFicha);
router.put('/:_id',fichaControler.updateFicha);
router.delete('/:_id', fichaControler.deleteFicha);

module.exports = router;