"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const _exceptions_1 = require("../../_exceptions");
//The module is provided to all contollers for application errors to be updated on the view
const errorHandler = (error, logger) => {
    if (error instanceof _exceptions_1.UniqueConstraintException) {
        logger.error(error.message);
        throw error;
    }
    else if (error instanceof _exceptions_1.MissingParamtersException) {
        logger.error(error.message);
        throw error;
    }
    else if (error instanceof _exceptions_1.ForbiddenException) {
        logger.error(error.message);
        throw error;
    }
    else if (error instanceof _exceptions_1.UserNotFoundException) {
        logger.error(error.message);
        throw error;
        // return ResponseType.badRequest(error.message);
    }
    else if (error instanceof _exceptions_1.ValidationException) {
        logger.error(error.message);
        throw error;
    }
    else {
        logger.error(error);
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=appErrorResponse.js.map