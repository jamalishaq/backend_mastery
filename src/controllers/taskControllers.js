import asyncHandler from "express-async-handler";
import { createTaskService, getTasksService } from "../services/taskServices.js";

export const createTask = asyncHandler(async (req, res, next) => {
    const task = await createTaskService(req.body, req.db);

    return res.status(201).json(task);
});

export const getTasks = asyncHandler(async (req, res, next) => {
    const tasks = await getTasksService(req.db);

    return res.status(200).json(users);
});