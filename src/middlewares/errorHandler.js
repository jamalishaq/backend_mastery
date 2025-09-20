import { AppError } from "../utils/AppError.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof AppError ? err.statusCode: 500;

    res.status(statusCode).json({
        status: "error",
        error: {
            name: err.name,
            statusCode,
            message: err.message || "Something went wrong",
            details: err.details || null,
        }
    });
};

export default errorHandler