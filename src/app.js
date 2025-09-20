import express from "express";
import appRouter from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/v1", appRouter);

app.use(errorHandler);

export default app;