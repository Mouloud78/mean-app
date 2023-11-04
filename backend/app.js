//import express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

//use express
//ll91OOtDgVGoSs4M
const app = express();

mongoose
  .connect(
    "mongodb+srv://Mouloud:ll91OOtDgVGoSs4M@cluster0.48abx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf12421l",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "ksaflaj12421l",
      title: "Second server-side post",
      content: "This is coming from the server",
    },
  ];
  res.status(200).json({
    message: "Post fetched succesfully!",
    posts: posts,
  });
});

module.exports = app;
