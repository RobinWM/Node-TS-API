import { RequestHandler } from "express";
import uuid = require("uuid");
import { DataStore } from "../../data/data";
import NewPost from "../../interface/newPost";
import { APIError, PublicInfo } from "../../model/shared/message";

// console.log(uuid);

export const apiCreatePost: RequestHandler = (req, res, next) => {
  console.log(req.body);

  // 对传递的参数进行校验
  const requireFields = ["title", "body"];
  const givenFields = Object.getOwnPropertyNames(req.body);
  if (!requireFields.every((f) => givenFields.includes(f))) {
    return next(
      new APIError("Missing", " Not all require fields supplied", 400)
    );
  }

  const newPost: NewPost = {
    id: uuid.v4(),
    userId: req.body.userId || 1,
    title: req.body.title,
    body: req.body.body,
    price: req.body.body,
    currency: req.body.currency,
  };

  DataStore.posts.push(newPost);
  // res.json(newPost);
  res.json(new PublicInfo("post added", 200, { post: newPost }));
};
