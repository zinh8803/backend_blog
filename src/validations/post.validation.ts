// import { body } from "express-validator";

// export const postValidator = [
//   body("title")
//     .notEmpty()
//     .withMessage("Title is required")
//     .isLength({ min: 3, max: 100 })
//     .withMessage("Title must be between 3 and 100 characters"),

//   body("content")
//     .notEmpty()
//     .withMessage("Content is required")
//     .isLength({ min: 10 })
//     .withMessage("Content must be at least 10 characters long"),

//   body("author")
//     .notEmpty()
//     .withMessage("Author is required")
//     .isMongoId()
//     .withMessage("Invalid author ID"),

//   body("tags").optional().isArray().withMessage("Tags must be an array"),
// ];
