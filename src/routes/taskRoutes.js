import express from "express";
import { validateTask } from "../middlewares/inputValidator.js";
import { createTask, getTasks } from "../controllers/taskControllers.js";

const taskRouter = express.Router();

taskRouter.route("/")
    .post(validateTask, createTask)
    .get(getTasks)

// taskRouter.route("/:id")
//     .get()
//     .patch()
//     .delete()

export default taskRouter;