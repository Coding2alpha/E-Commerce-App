const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/connect");
const router=require('./routes/auth')

const app = express();
app.use(cors());
app.use(express.json());
app.use('',router);

// models



app.get("/", (req, res) => {
  res.send("hello");
});


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connect with database");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
