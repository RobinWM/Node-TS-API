"use strict";
exports.__esModule = true;
var express = require("express");
var apiGetPosts_1 = require("./api/posts/apiGetPosts");
var apiGetPostsDetail_1 = require("./api/posts/apiGetPostsDetail");
var apiCreatePost_1 = require("./api/posts/apiCreatePost");
var apiDeletePost_1 = require("./api/posts/apiDeletePost");
var body_parser_1 = require("body-parser");
var app = express();
var mysql = require("mysql");
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
// 1.定义中间件
var logger = function (req, res, next) {
    console.log(new Date() + "-" + req.method + "-" + req.path);
    next();
};
//2.全局使用，也可以单独使用
app.use(logger);
// 1.获取全部数据
app.get("/posts", logger, apiGetPosts_1.apiGetPosts);
// 2.获取部分数据
app.get("/posts/:id", apiGetPostsDetail_1.apiGetPostsDetail);
// 3.添加数据
app.post("/posts", apiCreatePost_1.apiCreatePost);
// 4.删除数据
app["delete"]("/posts/:id", apiDeletePost_1.apiDeletePost);
// 5.更新数据
app.put("/psots/:id", function (req, res) {
    console.log("put");
});
// 连接mysql
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});
db.connect(function (err) {
    if (err)
        throw err;
    console.log("连接成功！");
    var sql = "CREATE DATABASE nodemysql";
    // db.query(sql, (err: any, res: any) => {
    // if (err) {
    // console.log(err);
    // } else {
    // console.log(res);
    // }
    // });
});
app.listen(process.env.PORT || 8091, function () {
    console.log("Server started...");
});
