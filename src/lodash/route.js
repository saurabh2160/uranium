const express = require('express');
//const chunkarray = require('./chunkarray')
const _=require('lodash')

const router = express.Router();

router.get('/hello-me', function (req, res) {
    console.log(_.chunk(['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],2));
    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason