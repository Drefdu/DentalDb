const express = require('express');
const router = express.Router();
const fotosControler = require('../controllers/photosControler');

router.post('/', fotosControler.addFoto);
router.get('/:FichaId', fotosControler.getFotos);
router.delete('/:_id', fotosControler.deleteFoto);

module.exports = router;