import sequelize from "../models/sequelize";
import User from "../models/user.model";
import Role from "../models/roles.model";
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synchronized!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

export default syncDatabase;
