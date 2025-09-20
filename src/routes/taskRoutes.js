import express from "express";
import {
  validateRouteId,
  validateTask,
} from "../middlewares/inputValidator.js";
import {
  createTask,
  deleteTask,
  getSingleTask,
  getTasks,
  updateTask,
} from "../controllers/taskControllers.js";

const taskRouter = express.Router();

taskRouter.route("/").post(validateTask, createTask).get(getTasks);

taskRouter
  .route("/:id")
  .get(validateRouteId, getSingleTask)
  .patch(validateRouteId, updateTask)
  .delete(validateRouteId, deleteTask);

export default taskRouter;
