"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Logger = void 0;
const winston_1 = require("winston");
// Function to create a logger instance with file transport
const createLoggerInstance = (level, filename) => {
    return (0, winston_1.createLogger)({
        defaultMeta: { service: "user-service" },
        level: level,
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
        transports: [new winston_1.transports.File({ filename: filename, level: level })],
    });
};
// Create separate logger instances for info and error
const infoLogger = createLoggerInstance("info", "info.log");
const errorLogger = createLoggerInstance("error", "error.log");
// Conditionally add console transport if not in production
if (process.env.NODE_ENV !== "production") {
    infoLogger.add(new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    }));
    errorLogger.add(new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    }));
}
//   format: format.combine(format.timestamp(), format.json()),
//   defaultMeta: { service: "user-service" },
//   transports: [
//     new transports.File({
//       filename: "info.log",
//       level: "info",
//     }),
//     new transports.Console({
//       level: "error",
//     }),
//   ],
//   exceptionHandlers: [
//     new transports.Console({
//       level: "error",
//     }),
//     new transports.File({ level: "error", filename: "exceptions.log" }),
//   ],
// });
class Logger {
    static info(params) {
        return infoLogger.info(params);
    }
    static error(params) {
        return errorLogger.error(params);
    }
}
exports.Logger = Logger;
exports.logger = {
    info: (params) => {
        return infoLogger.info(params);
    },
    error: (params) => {
        return errorLogger.error(params);
    },
};
// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new transports.Console({
//       format: format.combine(format.timestamp(), format.json()),
//     })
//   );
// }
//# sourceMappingURL=logger.js.map