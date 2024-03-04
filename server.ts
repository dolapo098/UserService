import express, { Express } from "express";
import process from "node:process";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import { databaseSync } from "./src/_db";
import { logger } from "./src/_lib/logger";
import { router } from "./src/routes/routes";
import { Logger } from "./src/_lib/logger";

const app: Express = express();

const port = process.env.NODE_ENV === "production" ? 80 : 4000;

app.use(cors()); //https://www.npmjs.com/package/cors used to implement cors
app.use(express.json()); // A middlware from express js  used for parsing incoming request in json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Middleware function to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call next middleware in the chain
});

app.use("/userservice/api", router);

process.on("uncaughtException", (err, origin) => {
  Logger.error(
    `Caught exception: ${err.message}\n` + `Exception origin: ${origin}`
  );
});

//an express method used for listeing to any specific connection
app.listen(port, () => {
  logger.info(`server is now listening on port ${port}`);
});

databaseSync.connectToDatabase();
