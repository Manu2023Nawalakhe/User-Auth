import mongoose from "mongoose";
import User from "./User";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  User: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User",
  },
});

const Task = new mongoose.model("Task", TaskSchema);

export default Task;
