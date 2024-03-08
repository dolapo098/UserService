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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.UserService = void 0;
__exportStar(require("./user"), exports);
const user_1 = require("./user");
const _helper_1 = require("../_helper");
const repositories_1 = require("../repositories");
const _entities_1 = require("../_entities");
var user_2 = require("./user");
Object.defineProperty(exports, "UserService", { enumerable: true, get: function () { return user_2.UserService; } });
exports.userService = new user_1.UserService(_helper_1.FieldValidator, repositories_1.userRepository, new _entities_1.UserObj());
//# sourceMappingURL=index.js.map