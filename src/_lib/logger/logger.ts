import { createLogger, transports, format } from "winston";

// Function to create a logger instance with file transport
const createLoggerInstance = (level: string, filename: string) => {
  return createLogger({
    defaultMeta: { service: "user-service" },
    level: level,
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.File({ filename: filename, level: level })],
  });
};

// Create separate logger instances for info and error
const infoLogger = createLoggerInstance("info", "info.log");
const errorLogger = createLoggerInstance("error", "error.log");

// Conditionally add console transport if not in production
if (process.env.NODE_ENV !== "production") {
  infoLogger.add(
    new transports.Console({
      format: format.combine(format.timestamp(), format.json()),
    })
  );
  errorLogger.add(
    new transports.Console({
      format: format.combine(format.timestamp(), format.json()),
    })
  );
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

export const logger = {
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
