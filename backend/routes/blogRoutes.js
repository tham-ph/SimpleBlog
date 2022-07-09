const express = require("express");
const router = express.Router();

const createBlog = require("../controller/blogController").createBlog;
router.post("/create", createBlog);

const getBlogById = require("../controller/blogController").getBlogById;
router.get("/id/:id", getBlogById);

const getAllBlogs = require("../controller/blogController").getAllBlogs;
router.get("/get-all-blogs", getAllBlogs);

const deleteBlogById = require("../controller/blogController").deleteBlogById;
router.post("/delete", deleteBlogById);

module.exports = router;
