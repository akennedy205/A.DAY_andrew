const express = require('express');
const router = express.Router();

const habitsController = require('../controllers/habits');

router.get('/', habitsController.index);

router.post('/', habitsController.create);

router.get('/:id', habitsController.show);

router.delete('/:id', habitsController.destroy);

router.put('/:id', habitsController.update);

module.exports = router;
