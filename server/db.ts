import mysql, { Connection } from "mysql2";

// Type for the database connection config
interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

// Function to connect to the MySQL database
const connectDB = (): Connection => {
  const connectionConfig: DBConfig = {
    host: "localhost",
    user: "root",
    password: "hafsa457",
    database: "Morrent_App",
    port: 3306,
  };

  const connection = mysql.createConnection(connectionConfig);

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
