"use strict";
exports.__esModule = true;
exports.apiCreatePost = void 0;
var uuid = require("uuid");
var data_1 = require("../../data/data");
// console.log(uuid);
exports.apiCreatePost = function (req, res) {
    console.log(req.body);
    var newPost = {
        id: uuid.v4(),
        userId: req.body.userId || 1,
        title: req.body.title,
        body: req.body.body,
        price: req.body.body,
        currency: req.body.currency
    };
    data_1.DataStore.posts.push(newPost);
    res.json(newPost);
};
