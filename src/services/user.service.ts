import { IUser, IUserInput } from "../interfaces/user.interface";
import UserRepository from "../repositories/user.repository";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
export const getAllUsers = async (): Promise<IUser[]> => {
  return UserRepository.findAll();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return UserRepository.findById(id);
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return UserRepository.findByEmail(email);
};

export const createUser = async (data: IUserInput): Promise<IUser> => {
  // Here you would typically hash the password before saving
  return UserRepository.create(data);
};

export const updateUser = async (
  id: string,
  data: Partial<IUserInput>
): Promise<IUser | null> => {
  // If password is being updated, you would hash it here
  return UserRepository.update(id, data);
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return UserRepository.delete(id);
};

export const registerUser = async (data: IUserInput): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const userData = { ...data, password: hashedPassword };
  return UserRepository.create(userData);
};

export const loginUser = async (
  email: string,
  password: string
): Promise<{ user: IUser; token: string } | null> => {
  const user = await UserRepository.findByEmail(email);
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;
  // Tạo JWT token
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });
  return { user, token };
};
