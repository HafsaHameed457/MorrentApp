import sequelize from "../models/sequelize";

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();
