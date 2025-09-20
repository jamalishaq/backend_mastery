import {
  createTaskRepository,
  deleteTaskRepository,
  getSingleTaskRepository,
  getTasksRepository,
  updateTaskRepository,
} from "../repositories/taskRepositories.js";

export const createTaskService = (data) => {
  return createTaskRepository(data);
};

export const getTasksService = () => {
  return getTasksRepository();
};

export const getSingleTaskService = (taskId) => {
  return getSingleTaskRepository(taskId);
};

export const updateTaskService = (taskId, data) => {
  return updateTaskRepository(taskId, data);
};

export const deleteTaskService = (taskId) => {
  return deleteTaskRepository(taskId);
};
