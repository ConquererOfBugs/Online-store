const Router = require('express');
const deviceController = require('../controller/deviceController');
const roleCheck = require("../middleware/authMiddleware");

const router = new Router;

router.post('/', roleCheck("ADMIN"), deviceController.createDevice);
router.get('/', deviceController.getDevices);
router.get('/:id', deviceController.getOneDevice);
router.delete('/:id', deviceController.deleteDevice);


module.exports = router;