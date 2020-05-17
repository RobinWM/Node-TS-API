"use strict";
exports.__esModule = true;
exports.apiGetPostsDetail = void 0;
var data_1 = require("../../data/data");
var postDetail_1 = require("../../model/shared/postDetail");
exports.apiGetPostsDetail = function (req, res) {
    var selectedPost = data_1.DataStore.posts.find(function (post) { return post.id == req.params.id; });
    console.log(selectedPost);
    if (selectedPost) {
        var selectedTodos = data_1.DataStore.todos.filter(function (item) { return item.postId == req.params.id; });
        res.json(new postDetail_1.PostDetail(selectedPost, selectedTodos));
    }
    else {
        res
            .status(404)
            .json({ status: "failed", message: "post not found", code: 404 });
    }
};
