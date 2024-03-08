"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidator = void 0;
const _exceptions_1 = require("../_exceptions");
class FieldValidator {
    static validateRequiredFields(reqFields, obj) {
        let getObjKeys = Object.keys(obj);
        let missingFields = [];
        reqFields.forEach((val) => {
            if (!getObjKeys.includes(val)) {
                missingFields.push(val);
            }
        });
        if (missingFields.length > 0) {
            throw new _exceptions_1.MissingParamtersException(` The field(s) ${missingFields} is required`);
        }
    }
    static validateReturnKeys(optionalFields, obj) {
        let getObjKeys = Object.keys(obj);
        let requiredFields = [];
        optionalFields.forEach((val) => {
            if (getObjKeys.includes(val) &&
                obj[val] !== null &&
                obj[val] !== undefined) {
                requiredFields.push(val);
            }
        });
        return requiredFields;
    }
}
exports.FieldValidator = FieldValidator;
//# sourceMappingURL=util.js.map