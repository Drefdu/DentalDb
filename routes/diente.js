const express = require('express');
const router = express.Router();
const dienteControler = require('../controllers/dienteControler');

router.post('/', dienteControler.addDiente);
router.get('/:dienteId', dienteControler.getDiente);
router.get('/');
router.put('/:dienteId', dienteControler.updateDiente);

module.exports = router;