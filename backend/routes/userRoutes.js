const express = require("express");
const router = express.Router();

const signInWithGoogle = require("../controller/userController").signInWithGoogle;
router.post("/sign-in-with-google", signInWithGoogle);

const changeUserName = require("../controller/userController").changeUserName;
router.post("/change-user-name", changeUserName)

module.exports = router;