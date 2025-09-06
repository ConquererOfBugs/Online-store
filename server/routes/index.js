const Router = require('express');
const router = new Router;
const deviceRouter = require('./deviceRout')
const userRouter = require('./userRout')
const brandRouter = require('./brandRout')
const typeRouter = require('./typeRout')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)


module.exports = router;