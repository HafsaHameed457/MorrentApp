import sequelize from "./sequelize";

// Sync the database
const syncDatabase = async () => {
  try {
    await sequelize.sync(); // Sync all models to the database
    console.log("Database synchronized!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();
