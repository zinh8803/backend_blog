import User, { IUser } from "../models/User";
import { IUserInput } from "../interfaces/user.interface";

export class UserRepository {
  async findAll(query?: any): Promise<IUser[]> {
    return User.find(query || {})
      .select("-password")
      .exec();
  }

  async findById(id: string): Promise<IUser | null> {
    return User.findById(id).select("-password").exec();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email }).exec();
  }

  async create(data: IUserInput): Promise<IUser> {
    const user = new User(data);
    return user.save();
  }

  async update(id: string, data: Partial<IUserInput>): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, { $set: data }, { new: true })
      .select("-password")
      .exec();
  }

  async delete(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id).exec();
  }
}

export default new UserRepository();
