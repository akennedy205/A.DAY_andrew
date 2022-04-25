const express = require("express");
const router = express.Router();

const habitsController = require('../controllers/habits');

router.route("/").get(habitsController.index).post(habitsController.create);

router
  .route("/:id")
  .get(habitsController.show)
  .delete(habitsController.destroy)
  .put(habitsController.update);

module.exports = router;
