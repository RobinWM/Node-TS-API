"use strict";
exports.__esModule = true;
exports.apiGetPosts = void 0;
var data_1 = require("../../data/data");
var postSummary_1 = require("../../model/shared/postSummary");
exports.apiGetPosts = function (req, res) {
    res.json(data_1.DataStore.posts.map(function (item) { return new postSummary_1["default"](item); }));
};
