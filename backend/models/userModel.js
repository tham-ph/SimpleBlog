const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  pictureURL: {
    type: String,
    require: true
  }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;