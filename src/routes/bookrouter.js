const express = require('express');
const bookcontrol=require('../codecontrol/bookcontrol')

const router = express.Router();

router.post('/authentry',bookcontrol.authdata);
router.post('/bookentry',bookcontrol.Bookdata);
router.post('/publisherentry',bookcontrol.publisherdata);
router.get('/bookdata',bookcontrol.showbookdata);
module.exports = router;