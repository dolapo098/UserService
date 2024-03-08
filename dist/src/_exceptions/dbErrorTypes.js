"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeErrorTypes = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class SequelizeErrorTypes {
    static checkErrorType(err) {
        if (err instanceof sequelize_1.ValidationError) {
            err.errors.map((msg) => {
                throw new _1.ValidationException(msg.message);
            });
        }
        else if (err instanceof sequelize_1.UniqueConstraintError) {
            err.errors.map((msg) => {
                throw new _1.UniqueConstraintException(msg.message);
            });
        }
        else {
            throw new Error(`${err.name} : ${err.message}`);
        }
    }
}
exports.SequelizeErrorTypes = SequelizeErrorTypes;
//# sourceMappingURL=dbErrorTypes.js.map