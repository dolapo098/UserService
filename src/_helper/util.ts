import { MissingParamtersException } from "../_exceptions";

class FieldValidator {
  static validateRequiredFields(reqFields: Array<string>, obj: any): void {
    let getObjKeys = Object.keys(obj);
    let missingFields = [];
    reqFields.forEach((val) => {
      if (!getObjKeys.includes(val)) {
        missingFields.push(val);
      }
    });

    if (missingFields.length > 0) {
      throw new MissingParamtersException(
        ` The field(s) ${missingFields} is required`
      );
    }
  }

  static validateReturnKeys(
    optionalFields: Array<string>,
    obj: any
  ): Array<string> {
    let getObjKeys = Object.keys(obj);
    let requiredFields = [];

    optionalFields.forEach((val) => {
      if (
        getObjKeys.includes(val) &&
        obj[val] !== null &&
        obj[val] !== undefined
      ) {
        requiredFields.push(val);
      }
    });

    return requiredFields;
  }
}

export { FieldValidator };
