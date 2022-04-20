const express = require('express');
const middleware=require('./middlewares')
const control=require('./codecontroller')
const router = express.Router();

router.post('/createuser',middleware.headerval,control.userdata)
router.post('/createproduct',middleware.headerval,control.productdata)
router.post('/orderpurchase',middleware.headerval,control.orderdata)




module.exports = router;