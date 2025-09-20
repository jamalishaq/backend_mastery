import asyncHandler from "express-async-handler";
import {
  createTaskService,
  deleteTaskService,
  getSingleTaskService,
  getTasksService,
  updateTaskService,
} from "../services/taskServices.js";

export const createTask = asyncHandler(async (req, res) => {
  const task = await createTaskService(req.body);

  return res.status(201).json({status: "success", data: task});
});

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await getTasksService();

  return res.status(200).json({status: "success", data: tasks});
});

export const getSingleTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await getSingleTaskService(taskId);

  return res.status(200).json({status: "success", data: task});
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  await updateTaskService(taskId, req.body);

  return res.status(200).send("Task updated successfully");
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  await deleteTaskService(taskId);

  return res.status(200).send("Task deleted successfully");
});
