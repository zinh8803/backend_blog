import { Request, Response, NextFunction } from "express";
import * as postService from "../services/post.service";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

// export const getPostById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const post = await postService.getPostById(req.params.id);
//     if (!post) {
//       res.status(404).json({ message: "Post not found" });
//       return;
//     }
//     res.json(post);
//   } catch (error) {
//     next(error);
//   }
// };

// export const createPost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const post = await postService.createPost(req.body);
//     res.status(201).json(post);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updatePost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const post = await postService.updatePost(req.params.id, req.body);
//     if (!post) {
//       res.status(404).json({ message: "Post not found" });
//       return;
//     }
//     res.json(post);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deletePost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const result = await postService.deletePost(req.params.id);
//     if (!result) {
//       res.status(404).json({ message: "Post not found" });
//       return;
//     }
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };
