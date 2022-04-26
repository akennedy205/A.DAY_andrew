const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.index);

router.post('/', usersController.create);

router.get('/:id', usersController.show);

router.delete('/:id', usersController.destroy);

router.put('/:id', usersController.update);

module.exports = router;
