import express, { Express } from "express";
import process from "node:process";
import dotenv from "dotenv";
import { databaseSync } from "./src/_db";
import { logger } from "./src/_lib/logger";

const app: Express = express();

const port = process.env.NODE_ENV === "production" ? 80 : 4000;

process.on("uncaughtException", (err, origin) => {
  console.log(
    `Caught exception: ${err.message}\n` + `Exception origin: ${origin}`
  );
  // logger.error(
  //   `Caught exception: ${err.message}\n` + `Exception origin: ${origin}`
  // );
});

//an express method used for listeing to any specific connection
app.listen(port, () => {
  logger.info(`server is now listening on port ${port}`);
});

databaseSync.connectToDatabase();
