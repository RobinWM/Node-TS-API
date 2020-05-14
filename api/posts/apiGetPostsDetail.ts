import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { PostDetail } from "../../model/shared/postDetail";

export const apiGetPostsDetail: RequestHandler = (req, res) => {
  const selectedPost = DataStore.posts.find(
    (post: any) => post.id == req.params.id
  );

  console.log(selectedPost);

  if (selectedPost) {
    const selectedTodos = DataStore.todos.filter(
      (item: any) => item.postId == req.params.id
    );
    res.json(new PostDetail(selectedPost, selectedTodos));
  } else {
    res
      .status(404)
      .json({ status: "failed", message: "post not found", code: 404 });
  }
};
