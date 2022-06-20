const userModel = require("../models/userModel");

const signInWithGoogle = async(req, res) => {
  const {email, name, pictureURL} = req.body;

  let user = await userModel.findOne({email});

  if (!user) {
    user = await userModel.create({email, name, pictureURL});
  }
  res.json({
    id: user._id,
    email: user.email,
    name: user.name,
    pictureURL: user.pictureURL
  });
}

const changeUserName = async(req, res) => {
  const {userId, newName} = req.body;

  const user = await userModel.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  user.name = newName;
  const updatedUser = await user.save();
  // const updatedUser = await userModel.update({_id: userId}, user);

  res.json({
    id: updatedUser._id,
    email: updatedUser.email,
    name: updatedUser.name,
    pictureURL: updatedUser.pictureURL
  });
}

module.exports = {
  signInWithGoogle,
  changeUserName
}