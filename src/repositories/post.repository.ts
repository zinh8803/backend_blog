// import { FilterQuery } from "mongoose";
// import Post from "../models/post.model";
// import { IPost, IPostInput } from "../interfaces/post.interface";

// export class PostRepository {
//   async findAll(query?: FilterQuery<IPost>): Promise<IPost[]> {
//     return Post.find(query || {})
//       .sort({ createdAt: -1 })
//       .exec();
//   }

//   async findById(id: string): Promise<IPost | null> {
//     return Post.findById(id).exec();
//   }

//   async create(data: IPostInput): Promise<IPost> {
//     const post = new Post(data);
//     return post.save();
//   }

//   async update(id: string, data: Partial<IPostInput>): Promise<IPost | null> {
//     return Post.findByIdAndUpdate(id, { $set: data }, { new: true }).exec();
//   }

//   async delete(id: string): Promise<IPost | null> {
//     return Post.findByIdAndDelete(id).exec();
//   }
// }

// export default new PostRepository();
