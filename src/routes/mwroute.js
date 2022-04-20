const express = require('express');
const control=require('../codecontrol/mwcontrol')
const middleware=require('../middlewares/mw')
const router = express.Router();

router.get('/getfalna',control.info)
router.get('/getlost',control.info2)


module.exports = router;