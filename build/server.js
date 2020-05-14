"use strict";
exports.__esModule = true;
var express = require("express");
var data_1 = require("./data/data");
var apiGetPosts_1 = require("./api/posts/apiGetPosts");
var apiGetPostsDetail_1 = require("./api/posts/apiGetPostsDetail");
var app = express();
// console.log(DataStore.posts);
app.get("/todos", function (req, res, next) {
    res.json(data_1.DataStore.todos);
});
app.get("/posts", apiGetPosts_1.apiGetPosts);
app.get("/posts/:id", apiGetPostsDetail_1.apiGetPostsDetail);
app.listen(process.env.PORT || 8091, function () {
    console.log("Server started...");
});
