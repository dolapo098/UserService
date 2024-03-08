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
exports.UserRepository = void 0;
const sequelize_1 = require("sequelize");
class UserRepository {
    constructor(dbUserObj, dbErrorTypes) {
        this.dbUserObj = dbUserObj;
        this.dbErrorTypes = dbErrorTypes;
    }
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registeredUser = yield this.dbUserObj.create({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                });
                console.log(registeredUser);
                return registeredUser !== null && registeredUser !== void 0 ? registeredUser : null;
            }
            catch (err) {
                this.dbErrorTypes.checkErrorType(err);
            }
        });
    }
    findAllUsers(requiredKeys, userObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let queryClause = {};
                // if (query) {
                //   queryClause = { firstName: { [Op.substring]: query } };
                // }
                requiredKeys.forEach((val) => {
                    queryClause[val] = userObj[val];
                });
                const user = yield this.dbUserObj.findAll({
                    where: queryClause,
                });
                return user !== null && user !== void 0 ? user : null;
            }
            catch (err) {
                this.dbErrorTypes.checkErrorType(err);
            }
        });
    }
    findOneUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.dbUserObj.findOne({
                    where: { id: id },
                });
                return user !== null && user !== void 0 ? user : null;
            }
            catch (err) {
                this.dbErrorTypes.checkErrorType(err);
            }
        });
    }
    findOneUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.dbUserObj.findOne({
                    where: { email: email },
                });
                return user !== null && user !== void 0 ? user : null;
            }
            catch (err) {
                this.dbErrorTypes.checkErrorType(err);
            }
        });
    }
    findOneUserByEmailPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.dbUserObj.findOne({
                    where: { [sequelize_1.Op.and]: [{ email: email }, { password: password }] },
                });
                return user !== null && user !== void 0 ? user : null;
            }
            catch (err) {
                this.dbErrorTypes.checkErrorType(err);
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.js.map