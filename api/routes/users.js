const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

const { verifyToken } = require('../middleware/auth');

router.get('/', usersController.index);

router.post('/', verifyToken, usersController.create);

router.get('/:username', usersController.show);

router.delete('/:id', verifyToken, usersController.destroy);

router.put('/:id', verifyToken, usersController.update);

module.exports = router;
