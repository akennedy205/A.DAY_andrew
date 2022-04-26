const express = require("express");
const router = express.Router();

const authsController = require("../controllers/auth");
router.use("/auth", authsController);

module.exports = router;
