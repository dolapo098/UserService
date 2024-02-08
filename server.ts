import express, { Express } from "express";
import dotenv from "dotenv";
import { logger } from "./_lib/logger";

const app: Express = express();

const port = process.env.NODE_ENV === "production" ? 80 : 4000;

//an express method used for listeing to any specific connection
app.listen(port, () => {
  logger.info(`server is now listening on port ${port}`);
});
