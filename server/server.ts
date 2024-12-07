import * as dotenv from "dotenv";
import express, { Request, Response, Express } from "express";
import { createResponse } from "./helpers/responseUtils";
import connectDB from "./db";
import seedAdmin from "./seeders/user.seeders";
import syncDatabase from "./seeders/syncDatabase";
import seedRoles from "./seeders/roles.seeders";

dotenv.config();

const app: Express = express();

app.use(express.json());

(async () => {
  await connectDB();
  await syncDatabase();
  await seedRoles();
  await seedAdmin();
})();

app.get("/", (req: Request, res: Response) => {
  const data = { greeting: "Hello there, came to visit??" };
  const message = "Welcome to Hafsa's server!";

  res.status(200).json(createResponse(data, message, true));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
