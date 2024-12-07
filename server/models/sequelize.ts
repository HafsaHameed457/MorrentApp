import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize("Morrent_App", "root", "hafsa457", {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export default sequelize;
