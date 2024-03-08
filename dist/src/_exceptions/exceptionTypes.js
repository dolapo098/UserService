"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueConstraintException = exports.UnauthorizedException = exports.ForbiddenException = exports.ValidationException = exports.InternalServerException = exports.NotFoundException = exports.UserNotFoundException = exports.MissingParamtersException = exports.CustomServiceException = void 0;
//Error class for any resource which already exists in the application
class UniqueConstraintException extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = "UniqueConstraintError";
        this.message = message || "property value already exist";
        this.statusCode = statusCode;
    }
}
exports.UniqueConstraintException = UniqueConstraintException;
//Error class if a resource cannot be found in the application
class CustomServiceException extends Error {
    constructor(message, name = " CustomServiceException", statusCode = 400) {
        super(message);
        this.name = name;
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.CustomServiceException = CustomServiceException;
//Error class if a resource cannot be found in the application
class UserNotFoundException extends Error {
    constructor(message = "user does not exist", statusCode = 400) {
        super(message);
        this.name = "UserNotFoundException";
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.UserNotFoundException = UserNotFoundException;
//Error class for validation
class ValidationException extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = "ValidationException";
        this.message = message || "validation failed";
        this.statusCode = 400 || statusCode;
    }
}
exports.ValidationException = ValidationException;
//Error class for any missing parameter not attached to user requests
class MissingParamtersException extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = "MissingParamtersError";
        this.message = message || "Missing field parameter";
        this.statusCode = 400 || statusCode;
    }
}
exports.MissingParamtersException = MissingParamtersException;
//Error class for any strange error that occured with the application
class InternalServerException extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.message =
            message ||
                "Your request has caused our server to behave in a way we do not understand";
        this.name = "InternalServerError";
        this.statusCode = 500 || statusCode;
    }
}
exports.InternalServerException = InternalServerException;
//Error class for unauthorized access to the application
class UnauthorizedException extends Error {
    constructor(message, statusCode = 401) {
        super(message);
        this.message = message || "Invalid credentials provided";
        this.name = "UnauthorizedError";
        this.statusCode = 401 || statusCode;
    }
}
exports.UnauthorizedException = UnauthorizedException;
// Error class for forbiden requests sent to the application
class ForbiddenException extends Error {
    constructor(message, statusCode = 403) {
        super(message);
        this.message = message || "Access denied";
        this.name = "ForbiddenError";
        this.statusCode = 403 || statusCode;
    }
}
exports.ForbiddenException = ForbiddenException;
class NotFoundException extends Error {
    constructor(message, statusCode = 404) {
        super(message);
        this.message = message || "The request  could not be found";
        this.name = "NotFoundError";
        this.statusCode = 404 || statusCode;
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=exceptionTypes.js.map