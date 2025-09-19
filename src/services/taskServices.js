import { createTaskRepository, getTasksRepository } from "../repositories/taskRepositories.js";

export const createTaskService = async (data, db) => {
    const task = await createTaskRepository(data, db);
    return task;
};

export const getTasksService = async (db) => {
    const tasks = await getTasksRepository(db);
    return tasks;
};