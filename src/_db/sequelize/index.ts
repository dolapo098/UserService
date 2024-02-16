import { Sequelize } from "sequelize-typescript";
import envConfig from "../config/index";

const env = process.env.NODE_ENV || "development";
const config = envConfig[env];

// const db = {};

export let sequelize: Sequelize;

if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  console.log(config);

  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
  //   sequelize = new Sequelize({
  //     database: config.database,
  //     dialect: config.dialect,
  //     username: config.username,
  //     password: config.password,
  //     storage: ":memory:",
  //     models: [__dirname + "/models"], // or [Player, Team],
  //   });
}

// export const sequelize = new Sequelize({
//   database: "some_db",
//   dialect: "sqlite",
//   username: "root",
//   password: "",
//   storage: ":memory:",
//   models: [__dirname + "/models"], // or [Player, Team],
// });
