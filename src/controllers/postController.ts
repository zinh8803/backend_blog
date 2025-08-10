// import { Request, Response } from "express";
// import { Post, User } from "../models";

// export const getPosts = async (req: Request, res: Response) => {
//   try {
//     const posts = await Post.findAll({
//       include: [
//         {
//           model: User,
//           as: "author",
//           attributes: ["id", "username"],
//         },
//       ],
//       order: [["createdAt", "DESC"]],
//     });

//     return res.status(200).json(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Add more controller methods as needed
