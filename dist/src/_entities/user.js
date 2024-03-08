"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObj = void 0;
// import { User } from "../../_db/models";
class UserObj {
    constructor() { }
    mapUserDtoToUser(userDto) {
        this.id = userDto.id;
        this.firstName = userDto.firstName;
        this.lastName = userDto.lastName;
        this.email = userDto.email;
        this.phoneNumber = userDto.phoneNumber;
    }
    mapDomainObjToUser(dbObj) {
        this.id = dbObj.id;
        this.firstName = dbObj.firstName;
        this.lastName = dbObj.lastName;
        this.email = dbObj.email;
        this.phoneNumber = dbObj.phoneNumber;
    }
}
exports.UserObj = UserObj;
//# sourceMappingURL=user.js.map