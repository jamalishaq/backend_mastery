import express from "express";
import taskRouter from "./taskRoutes.js";
import userRouter from "./userRoutes.js";
import authRouter from "./authRoutes.js";

const appRouter = express.Router();

appRouter.use("/tasks", taskRouter);
appRouter.use("/users", userRouter);
appRouter.use(authRouter);

export default appRouter;