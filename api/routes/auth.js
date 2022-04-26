const express = require('express');
const router = express.Router();

const authsController = require('../controllers/auth');
router.use('/', authsController);

module.exports = router;
