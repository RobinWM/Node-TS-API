"use strict";
exports.__esModule = true;
exports.apiCreatePost = void 0;
var uuid = require("uuid");
var data_1 = require("../../data/data");
var message_1 = require("../../model/shared/message");
// console.log(uuid);
exports.apiCreatePost = function (req, res, next) {
    console.log(req.body);
    // 对传递的参数进行校验
    var requireFields = ["title", "body"];
    var givenFields = Object.getOwnPropertyNames(req.body);
    if (!requireFields.every(function (f) { return givenFields.includes(f); })) {
        return next(new message_1.APIError("Missing", " Not all require fields supplied", 400));
    }
    var newPost = {
        id: uuid.v4(),
        userId: req.body.userId || 1,
        title: req.body.title,
        body: req.body.body,
        price: req.body.body,
        currency: req.body.currency
    };
    data_1.DataStore.posts.push(newPost);
    // res.json(newPost);
    res.json(new message_1.PublicInfo("post added", 200, { post: newPost }));
};
