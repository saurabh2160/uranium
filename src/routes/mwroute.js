const express = require('express');
const control=require('../codecontrol/mwcontrol')
const middleware=require('../middlewares/mw')
const router = express.Router();

router.get('/getuser',middleware.mw1,control.data)
router.get('/getfalna',middleware.mw1,control.info)
router.get('/getlost',middleware.mw1,control.info2)






module.exports = router;