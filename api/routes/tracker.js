const express = require("express");
const router = express.Router();
const trackerController = require("../controllers/tracker");

router.route("/").get(trackerController.index);

router.route("/:id").get(trackerController.show);

module.exports = router;
