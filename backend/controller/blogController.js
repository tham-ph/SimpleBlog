const blogModel = require("../models/blogModel");

const createBlog = async(req, res) => {
  const {title, content, owner_id} = req.body;

  const newBlog = await blogModel.create({
    title,
    content,
    date: new Date(),
    views: 0,
    owner_id
  })

  res.json({
    title: newBlog.title,
    content: newBlog.content,
    date: newBlog.date,
    views: newBlog.views,
    owner_id: newBlog.owner_id
  });
}

module.exports = {
  createBlog
}