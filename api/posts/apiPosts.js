"use strict";
exports.__esModule = true;
exports.postRouter = void 0;
var express_1 = require("express");
var apiGetPosts_1 = require("./apiGetPosts");
var apiGetPostsDetail_1 = require("./apiGetPostsDetail");
var apiCreatePost_1 = require("./apiCreatePost");
var apiDeletePost_1 = require("./apiDeletePost");
var apiUpdatePost_1 = require("./apiUpdatePost");
exports.postRouter = express_1.Router();
// 1.获取全部数据
exports.postRouter.get("", apiGetPosts_1.apiGetPosts);
// 2.获取部分数据
exports.postRouter.get("/:id", apiGetPostsDetail_1.apiGetPostsDetail);
// 3.添加数据
exports.postRouter.post("", apiCreatePost_1.apiCreatePost);
// 4.删除数据
exports.postRouter["delete"]("/:id", apiDeletePost_1.apiDeletePost);
// 5.更新数据
exports.postRouter.put("/:id", apiUpdatePost_1.apiUpdatePost);
