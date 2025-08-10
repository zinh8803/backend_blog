import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "3306";
const DB_NAME = process.env.DB_NAME || "blog";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: parseInt(DB_PORT as string, 10),
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

export const connectDB = async (): Promise<void> => {
  let retries = 5;

  while (retries) {
    try {
      await sequelize.authenticate();
      console.log("MySQL database connected successfully");
      return;
    } catch (error: any) {
      console.error(
        `MySQL connection attempt failed (${6 - retries}/5):`,
        error.message
      );

      retries -= 1;
      if (retries === 0) {
        console.error("Failed to connect to MySQL after multiple attempts");
        process.exit(1);
      }

      // Wait before retrying
      console.log(`Retrying in 5 seconds... (${retries} attempts remaining)`);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

export default sequelize;
