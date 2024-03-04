import { IHttpRequest } from "../_entities";
import { Logger } from "../_lib/logger";
import { IUserDto } from "ddoll_packages";
import { IUserService } from "../service";
import { errorHandler } from "../controllers";
import { ResponseType } from "./";
import { HttpJsonResponse } from "../_entities";

export interface IUserController {
  createUser(req: IHttpRequest): Promise<HttpJsonResponse>;
}

export class UserController implements IUserController {
  private readonly userService: IUserService;
  private readonly logger: typeof Logger;
  constructor(userService: IUserService, logger: typeof Logger) {
    this.userService = userService;
    this.logger = logger;
  }

  async createUser(req: IHttpRequest): Promise<HttpJsonResponse> {
    try {
      let userDto: IUserDto = {
        id: null,
        firstName: req.body?.firstName,
        email: req.body?.email,
        password: req.body?.password,
        lastName: req.body?.lastName,
        phoneNumber: req.body?.phoneNumber,
      };

      const user = await this.userService.createUser(userDto);
      return ResponseType.responseIsJson(user);
    } catch (err) {
      errorHandler(err, this.logger);
    }
  }
}
