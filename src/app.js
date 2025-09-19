import express from "express";
import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "./db/initDb.js";
import appRouter from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const db = drizzle({ client: pool });
    req.db = db;
    next();
})

app.use("/api/v1", appRouter);

app.use(errorHandler)

export default app;