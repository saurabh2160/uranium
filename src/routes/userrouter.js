const express = require('express');
const usercontroller=require('../codecontrol/usercontroller')

const router = express.Router();

router.post('/users', usercontroller.userdata);
module.exports = router;