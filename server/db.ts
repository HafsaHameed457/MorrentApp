import mysql, { Connection, ConnectionOptions } from "mysql2/promise"; // Use promise-based API
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

interface DBConfig extends ConnectionOptions {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

let connection: Connection | null = null;

const connectDB = async (): Promise<Connection> => {
  if (connection) {
    console.log("Using existing database connection");
    return connection;
  }

  try {
    const connectionConfig: DBConfig = {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "hafsa457",
      database: process.env.DB_NAME || "Morrent_App",
      port: Number(process.env.DB_PORT) || 3306,
    };

    connection = await mysql.createConnection(connectionConfig);
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${connectionConfig.database}\``
    );
    console.log(`Database '${connectionConfig.database}' is ready.`);
    await connection.changeUser({ database: connectionConfig.database });
    console.log("Connected to the database with ID:", connection.threadId);
    return connection;
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

export default connectDB;
