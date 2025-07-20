import express from "express";
const router = express.Router();

import { createTask, getTasks } from "../controllers/taskController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

router.post("/tasks",authMiddleware, createTask);
router.get("/tasks",authMiddleware, getTasks);

export default router;
