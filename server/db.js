import mysql from "mysql2";

const connectDB = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hafsa457",
    database: "database_name",
    port: 3306,
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
      return;
    }
    console.log("Connected to the database as id " + connection.threadId);
  });

  return connection;
};

export default connectDB;
