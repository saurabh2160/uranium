const express = require('express');
const formater = require('../validator/formater')

const router = express.Router();

router.get('/test-me', function (req, res) {
   formater.trimCon()
   formater.lwrCse()
   formater.uprcse()
    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason