const express = require("express");
const router = express.Router();

const createBlog = require("../controller/blogController").createBlog;
router.post("/create", createBlog);

const getBlogById = require("../controller/blogController").getBlogById;
router.get("/:id", getBlogById);

module.exports = router;
