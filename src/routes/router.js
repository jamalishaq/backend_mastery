import express from "express";
import taskRouter from "./taskRoutes.js";
import userRouter from "./userRoutes.js";
import authRouter from "./authRoutes.js";
import fileRouter from "./fileRoutes.js";

const appRouter = express.Router();

appRouter.use("/tasks", taskRouter);
appRouter.use("/users", userRouter);
appRouter.use("/uploads", fileRouter)
appRouter.use(authRouter);

export default appRouter;