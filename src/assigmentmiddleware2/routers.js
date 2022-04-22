
const express = require('express');
const router = express.Router();
const userController= require("../assignmentauth-1.js/coodecontroller")
//const middlware=require('../assignmentauth-1.js/middlewares')


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

module.exports = router;