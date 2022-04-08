const express = require('express');
const control=require('../codecontrol/control')
const router = express.Router();


router.post('/players',control.controller);
module.exports = router;