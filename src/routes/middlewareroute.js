const express = require('express');
const control=require('../codecontrol/mwcontrol')
const middleware=require('../middlewares/mw')
const router = express.Router();

router.get('/getuser',middleware.mw1,control.data)





module.exports = router;