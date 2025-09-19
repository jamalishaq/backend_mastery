import { AppError } from "../utils/AppError.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof AppError ? err.statusCode: 500;

    res.status(statusCode).json({
        name: err.name,
        status: "error",
        statusCode,
        message: err.message || "Something went wrong",
        details: err.details || [],
        path: req.originalUrl,
        timesamp: new Date().toISOString(),
    });
};

export default errorHandler