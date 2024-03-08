"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const httpCallback_1 = require("../_express_callback/httpCallback");
const controllers_1 = require("../controllers");
exports.router = express_1.default.Router();
// The authentication route which binds the user controller
exports.router.post("/create_user", (0, httpCallback_1.httpRequestCallBack)(controllers_1.userController.createUser.bind(controllers_1.userController))); // public route
exports.router.get("/test", function (req, res) {
    res.send("GET request to homepage");
});
exports.router.get("/get_all_users", (0, httpCallback_1.httpRequestCallBack)(controllers_1.userController.findAllUsers.bind(controllers_1.userController)));
//# sourceMappingURL=routes.js.map