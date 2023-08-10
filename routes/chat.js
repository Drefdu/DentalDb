const express = require('express');
const router = express.Router();

const chatControler =  require('../controllers/chatControler');

router.get('/', (req, res) => {
    res.send("hola");
});

module.exports = router;