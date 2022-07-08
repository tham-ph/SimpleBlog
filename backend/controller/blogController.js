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
    id: newBlog._id,
    title: newBlog.title,
    content: newBlog.content,
    date: newBlog.date,
    views: newBlog.views,
    ownerId: newBlog.owner_id
  });
}

const getBlogById = async(req, res) => {
  const blogId = req.param("id");
  try {
    const blog = await blogModel.findById(blogId);

    res.json({
      id: blog._id,
      title: blog.title,
      content: blog.content,
      date: blog.date,
      views: blog.views,
      ownerId: blog.owner_id
    });

  } catch (err) {
    console.log(err);
    res.status(404).send("Blog Not Found");
  }
}

const getAllBlogs = async (req, res) => {
  const allBlogs = await blogModel.find({});

  res.json(allBlogs.map(blog => {
    return {
      id: blog._id,
      title: blog.title,
      content: blog.content,
      date: blog.date,
      views: blog.views,
      ownerId: blog.owner_id
    }
  }));
}



module.exports = {
  createBlog,
  getBlogById,
  getAllBlogs
}