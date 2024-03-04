import { Sequelize } from "sequelize-typescript";
import envConfig from "../config/index";
import { User } from "../models";

const env = process.env.NODE_ENV || "development";
const config = envConfig[env];
// Disable Sequelize logging
config.logging = false;

// const db = {};

export let sequelize: Sequelize;

if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize.addModels([User]); // Add your other models similarly
