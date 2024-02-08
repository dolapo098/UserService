import { createLogger, transports, format } from "winston";
const { combine, timestamp, json } = format;
export const logger = createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "info.log", level: "info" }),
  ],
  exceptionHandlers: [new transports.File({ filename: "exceptions.log" })],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combine(timestamp(), json()),
    })
  );
}

// Define a custom type for your logger
export type CustomLogger = typeof logger;
