import express = require("express");
import { DataStore } from "./data/data";
import { apiGetPosts } from "./api/posts/apiGetPosts";
import { apiGetPostsDetail } from "./api/posts/apiGetPostsDetail";

const app = express();

// console.log(DataStore.posts);

app.get("/todos", (req, res, next) => {
  res.json(DataStore.todos);
});

app.get("/posts", apiGetPosts);

app.get("/posts/:id", apiGetPostsDetail);

app.listen(process.env.PORT || 8091, () => {
  console.log("Server started...");
});
