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
import { authenticate, verifyRole } from "../middlewares/auth.js";

const taskRouter = express.Router();

taskRouter.use(authenticate);
taskRouter.route("/").post(verifyRole(['admin']), validateTask, createTask).get(getTasks);

taskRouter
  .route("/:id")
  .get(validateRouteId, getSingleTask)
  .patch(validateRouteId, updateTask)
  .delete(verifyRole(['admin']), validateRouteId, deleteTask);

export default taskRouter;
