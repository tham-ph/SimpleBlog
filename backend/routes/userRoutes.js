const express = require("express");
const router = express.Router();
const signInWithGoogle = require("../controller/userController").signInWithGoogle;

router.post("/sign-in-with-google", signInWithGoogle);

module.exports = router;