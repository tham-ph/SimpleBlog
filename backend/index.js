const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: "../.env"});
const userModel = require("./models/userModel");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

app.get("/getAllUsers", (req, res) => {
  userModel.find({},(err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


app.listen(process.env.PORT || 5000, () => {
  console.log("running!!!");
});