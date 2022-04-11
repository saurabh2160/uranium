const express = require('express');
const bookcontrol=require('../codecontrol/bookcontrol')

const router = express.Router();

router.post('/bookentry', bookcontrol.bookdata);
router.get('/bookdata',bookcontrol.showBookdata);
module.exports = router;