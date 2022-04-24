const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/tracker');

router.route('/').get(trackerController.index).post(trackerController.create);

router
  .route('/:id')
  .get(trackerController.show)
  .delete(trackerController.delete)
  .put(trackerController.update);

module.exports = router;
