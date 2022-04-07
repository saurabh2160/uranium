const express = require('express');
const logger = require('../routes/')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});




module.exports = router;