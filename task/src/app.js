import express from "express";
import appRouter from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";
import rateLimit from "express-rate-limit";

const app = express();
const limiter = rateLimit({windowMs: 5 * 60 * 1000, max: 5});

app.use(express.json());
app.use(limiter);

app.use("/api/v1", appRouter);

app.use(errorHandler);

export default app;