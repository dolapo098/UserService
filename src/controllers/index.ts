import { UserController } from "./user_controller";
import { userService } from "../service";
import { Logger } from "../_lib/logger";

export * from "./view/appResponse";
export * from "./view/appErrorResponse";

export const userController = new UserController(userService, Logger);
