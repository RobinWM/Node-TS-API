"use strict";
exports.__esModule = true;
exports.apiDeletePost = void 0;
var data_1 = require("../../data/data");
exports.apiDeletePost = function (req, res) {
    //   console.log(req.params.id);
    var postIndex = data_1.DataStore.posts.findIndex(function (item) { return item.id == req.params.id; });
    //   console.log(postIndex);
    if (postIndex > -1) {
        data_1.DataStore.posts.splice(postIndex, 1);
        res.status(200).json({ status: "success", msg: "ok" });
    }
};
