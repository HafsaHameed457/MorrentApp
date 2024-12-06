import dotenv from "dotenv";
import express from "express";
import http from "http";
import { createResponse } from "./helpers/responseUtils.js";
import connectDB from "./db.js";

const app = express();
dotenv.config();
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  const data = { greeting: "Hello there, came to visit??" };
  const message = "Welcome to the Hafsa's server!";

  res.status(200).json(createResponse(data, message, true));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
