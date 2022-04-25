const express = require('express');
const router = express.Router();
const controller=require('./controller')

router.get('/getdistrict',controller.getSdistrict)
router.get('/getweather',controller.getweather)
router.get('/sortcity',controller.sortedcities)
router.post('/memes',controller.memes)




module.exports = router;