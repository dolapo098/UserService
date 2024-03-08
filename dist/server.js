"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_process_1 = __importDefault(require("node:process"));
const cors_1 = __importDefault(require("cors"));
const _db_1 = require("./src/_db");
const logger_1 = require("./src/_lib/logger");
const routes_1 = require("./src/routes/routes");
const logger_2 = require("./src/_lib/logger");
const app = (0, express_1.default)();
const port = node_process_1.default.env.NODE_ENV === "production" ? 80 : 4000;
app.use((0, cors_1.default)()); //https://www.npmjs.com/package/cors used to implement cors
app.use(express_1.default.json()); // A middlware from express js  used for parsing incoming request in json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Middleware function to log incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in the chain
});
app.use("/userservice/api", routes_1.router);
node_process_1.default.on("uncaughtException", (err, origin) => {
    logger_2.Logger.error(`Caught exception: ${err.message}\n` + `Exception origin: ${origin}`);
});
//an express method used for listeing to any specific connection
app.listen(port, () => {
    logger_1.logger.info(`server is now listening on port ${port}`);
});
_db_1.databaseSync.connectToDatabase();
//# sourceMappingURL=server.js.map