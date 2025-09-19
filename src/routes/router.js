import express from "express";
import taskRouter from "./taskRoutes.js";
import userRouter from "./userRoutes.js";

const appRouter = express.Router();

appRouter.use("/tasks", taskRouter);
appRouter.use("/users", userRouter);

export default appRouter;