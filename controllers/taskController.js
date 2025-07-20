import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = new Task({ ...req.body, user: req.user._id });
  await task.save();
  res.status(201).json({
    message: "Task created successfully",
    task,
  });
};
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.status(200).json({
    message: "Tasks retrieved successfully",
    tasks,
  });
};
