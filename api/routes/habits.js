const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const habitsController = require('../controllers/habits');

<<<<<<< HEAD
router.get('/', habitsController.index);
=======
router.get("/",habitsController.index);
>>>>>>> dadf72518274ddc6cd2461fab287de901fe4660f

router.post('/', verifyToken, habitsController.create);

<<<<<<< HEAD
router.get('/:id', habitsController.show);
=======
router.get("/:id", habitsController.show);
>>>>>>> dadf72518274ddc6cd2461fab287de901fe4660f

router.delete('/:id', verifyToken, habitsController.destroy);

router.put('/:id', verifyToken, habitsController.update);

module.exports = router;
