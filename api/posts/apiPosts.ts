import { Router } from "express";
import { apiGetPosts } from "./apiGetPosts";
import { apiGetPostsDetail } from "./apiGetPostsDetail";
import { apiCreatePost } from "./apiCreatePost";
import { apiDeletePost } from "./apiDeletePost";
import { apiUpdatePost } from "./apiUpdatePost";
export let postRouter = Router();

// 1.获取全部数据
postRouter.get("", apiGetPosts);

// 2.获取部分数据
postRouter.get("/:id", apiGetPostsDetail);

// 3.添加数据
postRouter.post("", apiCreatePost);

// 4.删除数据
postRouter.delete("/:id", apiDeletePost);

// 5.更新数据
postRouter.put("/:id", apiUpdatePost);
