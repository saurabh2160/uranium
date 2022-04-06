const express = require('express');
const _=require('lodash')

const router = express.Router();

router.get('/hello-me', function (req, res) {
    console.log(_.fromPairs([['name','tim'],['age',23],['loc','usa']]))
    res.send('My first ever api!')
});
module.exports = router;