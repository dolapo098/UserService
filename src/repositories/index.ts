export * from "./user";

import { UserRepository } from "./user";
import { SequelizeErrorTypes } from "../_exceptions";
import { User } from "../_db/models";

export const userRepository = new UserRepository(User, SequelizeErrorTypes);
