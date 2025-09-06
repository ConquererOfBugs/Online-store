const Router = require('express');
const userController = require("../controller/userController");
const { message } = require('statuses');
const router = new Router;
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.checkUser)
router.get('/login', userController.getUsers)
router.delete('/login/:id', userController.deleteUser)


module.exports = router;