"use strict";
exports.__esModule = true;
var express = require("express");
var errorHanding_1 = require("./api/general/errorHanding");
var body_parser_1 = require("body-parser");
var apiPosts_1 = require("./api/posts/apiPosts");
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
// 6.连接mysql
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});
// db.connect((err: any) => {
// if (err) throw err;
// console.log("连接成功！");
// const sql = "CREATE DATABASE nodemysql";
// db.query(sql, (err: any, res: any) => {
// if (err) {
// console.log(err);
// } else {
// console.log(res);
// }
// });
// });
// 7.处理错误信息
app.use(errorHanding_1.apiErrorHandler);
// 8.req对象详解
// GET http://localhost:8091/posts/id2/todos?star=5
/**
 *   GET: req.method
 *   http: req.protocol
 *   lhost: req.hostname
 *   post: envirment
 *   posts/id2/todos: req.originalURL
 *   id2: req.params = {postID =2}
 *   ?star=5: req.query={star:5}
 *   req.app
 *   req.body
 *   req.header
 *   req.secure
 *   req.cookies
 *   req.fresh
 */
// 9.res对象详解
/**
 *   res.send
 *   res.json
 *   res.format
 *   res.sendFile
 *   res.download
 *
 *    res.header,
 *    res.get,
 *    res.set
 */
// 10.状态码概述
/**
 *   2xx - success  成功
 *   3xx - redirect 重定向
 *   4xx - client   客户端错误
 *   5xx - server   服务端错误
 */
// 11.常用状态码
// 200 - OK  数据请求成功并返回
// 201 - 创建（post,put,patch）
// 204 - 删除 请求成功，但没数据返回
// 400 - 请求错误 客户端问题
// 401 - 未授权 token相关
// 404 - 未找到页面，页面不存在
// 405 - 方法未经允许
app.get("/headers", function (req, res, next) { return res.json(req.headers); });
// 配置posts路径
app.use("/posts", apiPosts_1.postRouter);
app.listen(process.env.PORT || 5000, function () {
    console.log("Server started...");
});
