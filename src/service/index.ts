export * from "./user";
import { UserService } from "./user";
import { FieldValidator } from "../_helper";
import { userRepository } from "../repositories";
import { UserObj } from "../_entities";

export { UserService } from "./user";

export const userService = new UserService(
  FieldValidator,
  userRepository,
  new UserObj()
);
