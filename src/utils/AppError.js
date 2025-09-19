export class AppError extends Error {
    constructor(message, statusCode, details, name) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.name = name;
    }
}

export class ValidationError extends AppError {
    constructor(message, details) {
        super(message, 400, details, "ValidationError")
    }
}