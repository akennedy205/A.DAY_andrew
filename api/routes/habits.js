const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const habitsController = require('../controllers/habits');

router.get('/', habitsController.index);

router.post('/:id', verifyToken, habitsController.create);

router.get('/:id', habitsController.show);

router.get('/:id', verifyToken, habitsController.update);

module.exports = router;
