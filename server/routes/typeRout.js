const Router = require('express');
const router = new Router;
const typeController = require("../controller/typeController");
const roleCheck = require("../middleware/authMiddleware");

router.post('/', roleCheck("ADMIN"), typeController.createType)
router.get('/', typeController.getType)


module.exports = router;