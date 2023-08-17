const express = require('express');
const router = express.Router();
const pulsoControler = require('../controllers/pulsoControler');

router.post('/', pulsoControler.addPulso);
router.get('/:id', pulsoControler.getPulso);
router.get('/', pulsoControler.getPulsos);
router.put('/', pulsoControler.updatePulso);

module.exports = router;