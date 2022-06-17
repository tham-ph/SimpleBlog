const userModel = require("../models/userModel");

const signInWithGoogle = async(req, res) => {
  const {email, name, pictureURL} = req.body;

  let user = await userModel.findOne({email});
  console.log(user);

  if (!user) {
    console.log("pass")
    user = await userModel.create({email, name, pictureURL});
  }

  res.json({
    _id: user._id,
    email: user.email,
    name: user.name,
    pictureURL: user.pictureURL
  });
}

module.exports = {
  signInWithGoogle,
}