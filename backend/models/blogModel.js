const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  views: {
    type: Number,
    require: true
  },
  owner_id: {
    type: String,
    require: true
  }
});

const blogModel = mongoose.model("blogs", blogSchema);
module.exports = blogModel;