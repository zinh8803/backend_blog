import { Op } from "sequelize";
import User from "../models/User";
import { IUser, IUserInput } from "../interfaces/user.interface";

export class UserRepository {
  async findAll(query?: any): Promise<IUser[]> {
    const whereClause = query || {};
    return User.findAll({
      attributes: { exclude: ["password"] },
      where: whereClause,
    });
  }

  async findById(id: string): Promise<IUser | null> {
    return User.findByPk(Number(id), {
      attributes: { exclude: ["password"] },
    });
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({
      where: { email },
    });
  }

  async create(data: IUserInput): Promise<IUser> {
    return User.create(data);
  }

  async update(id: string, data: Partial<IUserInput>): Promise<IUser | null> {
    // First update the record
    await User.update(data, {
      where: { id: Number(id) },
    });

    // Then fetch the updated record
    const updatedUser = await User.findByPk(Number(id), {
      attributes: { exclude: ["password"] },
    });

    return updatedUser;
  }

  async delete(id: string): Promise<IUser | null> {
    // Find the user first
    const user = await User.findByPk(Number(id));
    if (!user) return null;

    // Make a copy of the user data
    const userData = { ...user.get({ plain: true }) };

    // Delete the user
    await user.destroy();

    return userData as IUser;
  }
}

export default new UserRepository();
