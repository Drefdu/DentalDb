const express = require('express');
const router = express.Router();
const pulsoControler = require('../controllers/pulsoControler');

router.post('/', pulsoControler.addPulso);
router.get('/:id', pulsoControler.getPulso);


module.exports = router;