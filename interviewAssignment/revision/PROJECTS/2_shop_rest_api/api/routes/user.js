const express = require("express");
const checkAuth = require('../middleware/checkAuth')
const router = express.Router();
require("dotenv").config();

const UserController = require('../controllers/user')

const User = require("../models/user");

router.post("/signup", UserController.userSignup);

router.post("/login", UserController.userLogin);

router.delete(`/:userId`, checkAuth, UserController.userDelete);

module.exports = router;
