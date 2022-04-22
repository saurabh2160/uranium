const express = require('express');
const router = express.Router();
const userController= require("../assignmentauth-1.js/coodecontroller")
const middlware=require('../assignmentauth-1.js/middlewares')


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",middlware.mdlwr,userController.getUserData)

router.put("/users/:userId", middlware.mdlwr,userController.updateUser)

router.delete("/users/:userId", middlware.mdlwr,userController.deleteuser)

router.put("/userdataupdate/:userId",middlware.mdlwr,userController.userlog)

module.exports = router;