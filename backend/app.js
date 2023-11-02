//import express
const express = require("express");

//use express
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
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
