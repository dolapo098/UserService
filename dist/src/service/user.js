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
exports.UserService = void 0;
const _exceptions_1 = require("../_exceptions");
class UserService {
    constructor(fieldValidator, userRepo, userObj) {
        this.fieldValidator = fieldValidator;
        this.userRepo = userRepo;
        this.userObj = userObj;
    }
    createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req;
                let requiredFields = ["firstName", "lastName"];
                this.fieldValidator.validateRequiredFields(requiredFields, params);
                this.userObj.mapUserDtoToUser(params);
                const user = yield this.userRepo.registerUser(this.userObj);
                if (user === null)
                    return null;
                this.userObj.mapDomainObjToUser(user);
                return this.userObj;
            }
            catch (err) {
                throw err;
            }
        });
    }
    findAllUsers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.userObj.mapUserDtoToUser(params);
                let queryKeys = this.fieldValidator.validateReturnKeys(["firstName", "lastName", "email", "phoneNumber"], this.userObj);
                const dbUsers = yield this.userRepo.findAllUsers(queryKeys, this.userObj);
                if (dbUsers.length === 0)
                    throw new _exceptions_1.UserNotFoundException();
                const users = dbUsers.map(({ id, firstName, lastName, email, phoneNumber }) => ({
                    id: Number(id),
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                }));
                return users;
            }
            catch (err) {
                throw err;
                // throw new CustomServiceException(err.message, err?.name);
            }
        });
    }
    findOneUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOneUserById(id);
                if (user === null)
                    return null;
                this.userObj.mapDomainObjToUser(user);
                return this.userObj;
            }
            catch (err) {
                throw new _exceptions_1.CustomServiceException(err.message, err === null || err === void 0 ? void 0 : err.name);
            }
        });
    }
    findOneUserByEmailPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOneUserByEmailPassword(email, password);
                if (user === null)
                    return null;
                this.userObj.mapDomainObjToUser(user);
                return this.userObj;
            }
            catch (err) {
                throw new _exceptions_1.CustomServiceException(err.message, err === null || err === void 0 ? void 0 : err.name);
            }
        });
    }
    findOneUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOneUserByEmail(email);
                if (user === null)
                    return null;
                this.userObj.mapDomainObjToUser(user);
                return this.userObj;
            }
            catch (err) {
                throw new _exceptions_1.CustomServiceException(err.message, err === null || err === void 0 ? void 0 : err.name);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.js.map