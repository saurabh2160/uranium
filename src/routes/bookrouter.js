const express = require('express');
const bookcontrol=require('../codecontrol/bookcontrol')

const router = express.Router();

router.post('/authentry', bookcontrol.authdata);
router.post('/bookentry',bookcontrol.Bookdata);
router.get('/getbookbyid',bookcontrol.getbooks);
router.get('/getauthoftwostates',bookcontrol.authoftwostates);
router.get('/getbookcost',bookcontrol.getbookscost);

module.exports = router;