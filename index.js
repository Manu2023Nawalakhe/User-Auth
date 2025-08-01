import dotenv  from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);  
app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

connectDb().catch((error) => {
  console.error("Failed to connect to the database:", error);
  process.exit(1); // Exit the process with failure
});
