const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: "../.env"});
const userModel = require("./models/userModel");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

app.get("/api/env/google-oauth-client-id", (req, res) => {
  res.json(process.env.GOOGLE_OAUTH_CLIENT_ID);
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);

app.get("/getAllUsers", (req, res) => {
  userModel.find({},(err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});