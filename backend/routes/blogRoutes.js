const express = require("express");
const router = express.Router();

const createBlog = require("../controller/blogController").createBlog;
router.post("/create", createBlog);

module.exports = router;
