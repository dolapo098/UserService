import { ValidationError, UniqueConstraintError } from "sequelize";
import { ValidationException, UniqueConstraintException } from ".";

export class SequelizeErrorTypes {
  static checkErrorType(err: Error) {
    if (err instanceof ValidationError) {
      err.errors.map((msg) => {
        throw new ValidationException(msg.message);
      });
    } else if (err instanceof UniqueConstraintError) {
      err.errors.map((msg) => {
        throw new UniqueConstraintException(msg.message);
      });
    } else {
      throw new Error(`${err.name} : ${err.message}`);
    }
  }
}
