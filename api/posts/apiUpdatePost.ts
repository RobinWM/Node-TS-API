import { RequestHandler } from "express";
import uuid = require("uuid");
import { DataStore } from "../../data/data";
import NewPost from "../../interface/newPost";

// console.log(uuid);

export const apiUpdatePost: RequestHandler = (req, res) => {
  console.log(req.params.id);
//   const newPost: NewPost = {
//     id: uuid.v4(),
//     userId: req.body.userId || 1,
//     title: req.body.title,
//     body: req.body.body,
//     price: req.body.body,
//     currency: req.body.currency,
//   };

//   DataStore.posts.push(newPost);
//   res.json(newPost);
};
