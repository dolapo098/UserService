import {
  MissingParamtersException,
  MissingResourceException,
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
    throw ResponseType.badRequest(error.message);
  } else if (error instanceof MissingParamtersException) {
    logger.error(error.message);
    throw ResponseType.badRequest(error.message);
  } else if (error instanceof ForbiddenException) {
    logger.error(error.message);
    throw ResponseType.badRequest(error.message);
  } else if (error instanceof MissingResourceException) {
    logger.error(error.message);
    throw ResponseType.badRequest(error.message);
  } else if (error instanceof ValidationException) {
    logger.error(error.message);
    throw ResponseType.badRequest(error.message);
  } else {
    logger.error(error);
  }
};
