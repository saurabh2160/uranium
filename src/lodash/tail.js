const express = require('express');
const _=require('lodash')

const router = express.Router();

router.get('/hello-me', function (req, res) {
    console.log(_.tail([1,3,5,7,9,11,13,15,17,19]));
    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason