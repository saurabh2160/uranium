const express = require('express');
const uploadfileaws=require('../controller/codecontrol')
const router = express.Router();



router.post("/write-file-aws",uploadfileaws.getfilesfrompostman)



module.exports = router
