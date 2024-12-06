import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Morrent_App", "root", "hafsa457", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
