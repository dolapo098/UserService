import {
  MissingParamtersException,
  UserNotFoundException,
  NotFoundException,
  InternalServerException,
  ValidationException,
  ForbiddenException,
  UniqueConstraintException,
} from "../../_exceptions";
import { Logger } from "../../_lib/logger";
import { ResponseType } from "..";

//The module is provided to all contollers for application errors to be updated on the view
export const errorHandler = (error: Error, logger: typeof Logger) => {
  if (error instanceof UniqueConstraintException) {
    logger.error(error.message);
    throw error;
  } else if (error instanceof MissingParamtersException) {
    logger.error(error.message);
    throw error;
  } else if (error instanceof ForbiddenException) {
    logger.error(error.message);
    throw error;
  } else if (error instanceof UserNotFoundException) {
    logger.error(error.message);
    throw error;
    // return ResponseType.badRequest(error.message);
  } else if (error instanceof ValidationException) {
    logger.error(error.message);
    throw error;
  } else {
    logger.error(error);
  }
};
