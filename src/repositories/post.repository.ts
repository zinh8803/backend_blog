// import Post from "../models/Post";
// import { IPost, IPostInput } from "../interfaces/post.interface";
// export class PostRepository {
//   async findAll(query?: any): Promise<IPost[]> {
//     const whereClause = query || {};
//     return Post.findAll({
//       where: whereClause,
//     });
//   }

//   async findById(id: string): Promise<IPost | null> {
//     return Post.findByPk(Number(id));
//   }

//   async create(data: IPostInput): Promise<IPost> {
//     return Post.create(data);
//   }

//   async update(id: string, data: Partial<IPostInput>): Promise<IPost | null> {
//     await Post.update(data, {
//       where: { id: Number(id) },
//     });
//     return Post.findByPk(Number(id));
//   }

//   async delete(id: string): Promise<IPost | null> {
//     const post = await Post.findByPk(Number(id));
//     if (!post) return null;
//     await post.destroy();
//     return post;
//   }
// }

// export default new PostRepository();
