"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const index_1 = __importDefault(require("../config/index"));
const models_1 = require("../models");
const env = process.env.NODE_ENV || "development";
const config = index_1.default[env];
// Disable Sequelize logging
config.logging = false;
if (config.url) {
    exports.sequelize = new sequelize_typescript_1.Sequelize(config.url, config);
}
else {
    exports.sequelize = new sequelize_typescript_1.Sequelize(config.database, config.username, config.password, config);
}
exports.sequelize.addModels([models_1.User]); // Add your other models similarly
//# sourceMappingURL=index.js.map