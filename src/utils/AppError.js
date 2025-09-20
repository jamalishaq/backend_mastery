export class AppError extends Error {
    constructor(message, statusCode, details, name) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.name = name;
    }
}

export class ValidationError extends AppError {
    constructor(message, details = null) {
        super(message, 400, details, "ValidationError")
    }
}

export class NotFoundError extends AppError {
    constructor(message, details = null) {
        super(message, 404, details, "NotFoundError")
    }
}

export class AuthenticationError extends AppError {
    constructor(message, details = null) {
        super(message, 401, details, "AuthenticationError")
    }
}