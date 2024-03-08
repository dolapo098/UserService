"use strict";
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
exports.UserController = void 0;
const controllers_1 = require("../controllers");
const _1 = require("./");
class UserController {
    constructor(userService, logger) {
        this.userService = userService;
        this.logger = logger;
    }
    createUser(req) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userDto = {
                    id: null,
                    firstName: (_a = req.body) === null || _a === void 0 ? void 0 : _a.firstName,
                    email: (_b = req.body) === null || _b === void 0 ? void 0 : _b.email,
                    password: (_c = req.body) === null || _c === void 0 ? void 0 : _c.password,
                    lastName: (_d = req.body) === null || _d === void 0 ? void 0 : _d.lastName,
                    phoneNumber: (_e = req.body) === null || _e === void 0 ? void 0 : _e.phoneNumber,
                };
                const user = yield this.userService.createUser(userDto);
                return _1.ResponseType.responseIsJson(user);
            }
            catch (err) {
                (0, controllers_1.errorHandler)(err, this.logger);
            }
        });
    }
    findAllUsers(req) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userDto = {
                    id: null,
                    firstName: (_a = req.query) === null || _a === void 0 ? void 0 : _a.firstName,
                    email: (_b = req.query) === null || _b === void 0 ? void 0 : _b.email,
                    password: (_c = req.query) === null || _c === void 0 ? void 0 : _c.password,
                    lastName: (_d = req.query) === null || _d === void 0 ? void 0 : _d.lastName,
                    phoneNumber: (_e = req.query) === null || _e === void 0 ? void 0 : _e.phoneNumber,
                };
                const users = yield this.userService.findAllUsers(userDto);
                return _1.ResponseType.responseIsJson(users);
            }
            catch (err) {
                (0, controllers_1.errorHandler)(err, this.logger);
            }
        });
    }
    findOneUserById(req) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                const users = yield this.userService.findOneUserById(userId);
                return _1.ResponseType.responseIsJson(users);
            }
            catch (err) {
                (0, controllers_1.errorHandler)(err, this.logger);
            }
        });
    }
    findOneUserByEmail(req) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = (_a = req.body) === null || _a === void 0 ? void 0 : _a.email;
                const user = yield this.userService.findOneUserByEmail(email);
                return _1.ResponseType.responseIsJson(user);
            }
            catch (err) {
                (0, controllers_1.errorHandler)(err, this.logger);
            }
        });
    }
    findOneUserByEmailPassword(req) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = (_a = req.body) === null || _a === void 0 ? void 0 : _a.email;
                const password = (_b = req.body) === null || _b === void 0 ? void 0 : _b.password;
                const user = yield this.userService.findOneUserByEmailPassword(email, password);
                return _1.ResponseType.responseIsJson(user);
            }
            catch (err) {
                (0, controllers_1.errorHandler)(err, this.logger);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user_controller.js.map