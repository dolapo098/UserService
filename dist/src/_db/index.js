"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseSync = void 0;
__exportStar(require("./sequelize"), exports);
const sequelize_1 = require("../_db/sequelize");
const logger_1 = require("../_lib/logger");
class DataBaseSync {
    constructor(logger, sequelize) {
        this.logger = logger;
        this.sequelize = sequelize;
    }
    // Connect to the MongoDB database
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.authenticate();
                this.logger.info("Connection has been established successfully.");
                yield sequelize_1.sequelize.sync({ alter: true });
                // await sequelize.sync({ alter: true })
            }
            catch (error) {
                this.logger.error(`Unable to connect to the database ${error.message}`);
            }
        });
    }
    // Close the database connection
    closeDatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.sequelize.close();
            }
            catch (error) {
                this.logger.error("Error closing MongoDB connection:", error);
            }
        });
    }
    // Perform synchronous cleanup before shutting down the process
    cleanup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("Performing cleanup before shutting down the process...");
            yield this.closeDatabaseConnection();
        });
    }
}
exports.databaseSync = new DataBaseSync(logger_1.logger, sequelize_1.sequelize);
//# sourceMappingURL=index.js.map