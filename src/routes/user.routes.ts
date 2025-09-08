import express from "express";
import * as userController from "../controllers/user.controller";
import { userValidator } from "../validations/user.validation";
import { validate } from "../middlewares/validation.middleware";

const router = express.Router();

// Tạo user mới (dùng middleware validate)
router.post("/", validate(userValidator), userController.createUser);

// Cập nhật user (dùng middleware validate)
router.put("/:id", validate(userValidator), userController.updateUser);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;
