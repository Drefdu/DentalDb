const express = require('express');
const router = express.Router();
const usersControler = require('../controllers/usersControler');

router.post('/', usersControler.addUser);
router.get('/', usersControler.getUsers);
router.get('/:uid', usersControler.getUid);


module.exports = router;