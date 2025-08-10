import { IUser, IUserInput } from "../interfaces/user.interface";
import UserRepository from "../repositories/user.repository";

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
