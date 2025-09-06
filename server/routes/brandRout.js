const brandController = require('../controller/brandController');
const Router = require('express');
const roleCheck = require("../middleware/authMiddleware");

const router = new Router;

router.post('/', roleCheck("ADMIN"), brandController.createBrand);
router.get('/', brandController.getBrand);


module.exports = router;