const express = require('express');
const control=require('../codecontrol/codecontrol')

const router = express.Router();

router.post('/batchentry',control.batchdata);
router.post('/devloperentry',control.devloperdata);
router.get('/getdevdata',control.scholar); 
router.get('/data',control.getdata);

module.exports = router;