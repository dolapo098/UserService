//Error class for any resource which already exists in the application
class UniqueConstraintException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 400) {
      super(message);
      this.name = "UniqueConstraintError";
      this.message = message || "property value already exist";
      this.statusCode = statusCode;
    }
  }
  
  //Error class if a resource cannot be found in the application
  class MissingResourceException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 400) {
      super(message);
      this.name = "MissingResourceError";
      this.message = message || "No results found";
      this.statusCode = statusCode;
    }
  }
  
  //Error class for validation
  class ValidationException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 400) {
      super(message);
      this.name = "ValidationError";
      this.message = message || "validation failed";
      this.statusCode = 400 || statusCode;
    }
  }
  
  //Error class for any missing parameter not attached to user requests
  class MissingParamtersException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 400) {
      super(message);
      this.name = "MissingParamtersError";
      this.message = message || "Missing field parameter";
      this.statusCode = 400 || statusCode;
    }
  }
  
  //Error class for any strange error that occured with the application
  class InternalServerException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 500) {
      super(message);
      this.message =
        message ||
        "Your request has caused our server to behave in a way we do not understand";
      this.name = "InternalServerError";
      this.statusCode = 500 || statusCode;
    }
  }
  
  //Error class for unauthorized access to the application
  class UnauthorizedException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 401) {
      super(message);
      this.message = message || "Invalid credentials provided";
      this.name = "UnauthorizedError";
      this.statusCode = 401 || statusCode;
    }
  }
  
  // Error class for forbiden requests sent to the application
  class ForbiddenException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 403) {
      super(message);
      this.message = message || "Access denied";
      this.name = "ForbiddenError";
      this.statusCode = 403 || statusCode;
    }
  }
  
  class NotFoundException extends Error {
    name: string;
    message: string;
    statusCode: number;
    constructor(message: string, statusCode = 404) {
      super(message);
      this.message = message || "The reqquest  could not be found";
      this.name = "NotFoundError";
      this.statusCode = 404 || statusCode;
    }
  }
  
  export {
    MissingParamtersException,
    MissingResourceException,
    NotFoundException,
    InternalServerException,
    ValidationException,
    ForbiddenException,
    UnauthorizedException,
    UniqueConstraintException,
  };
  