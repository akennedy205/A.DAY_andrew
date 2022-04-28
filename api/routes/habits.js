const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const habitsController = require('../controllers/habits');

router.get('/', habitsController.index);

router.post('/', verifyToken, habitsController.create);

router.get('/:id', habitsController.show);

module.exports = router;
