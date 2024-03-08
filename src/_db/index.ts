import winston from "winston";
export * from "./sequelize";
import { sequelize } from "../_db/sequelize";
import { logger } from "../_lib/logger";
import { Sequelize } from "sequelize";

class DataBaseSync {
  logger: any;
  sequelize: Sequelize;

  constructor(logger: any, sequelize: Sequelize) {
    this.logger = logger;
    this.sequelize = sequelize;
  }

  // Connect to the MongoDB database
  async connectToDatabase() {
    try {
      await this.sequelize.authenticate();
      this.logger.info("Connection has been established successfully.");
      await sequelize.sync({ alter: true });
      // await sequelize.sync({ alter: true })
    } catch (error) {
      this.logger.error(`Unable to connect to the database ${error.message}`);
    }
  }

  // Close the database connection
  async closeDatabaseConnection() {
    try {
      this.sequelize.close();
    } catch (error) {
      this.logger.error("Error closing MongoDB connection:", error);
    }
  }

  // Perform synchronous cleanup before shutting down the process
  async cleanup() {
    this.logger.info("Performing cleanup before shutting down the process...");
    await this.closeDatabaseConnection();
  }
}

export const databaseSync = new DataBaseSync(logger, sequelize);
