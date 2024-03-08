import { IHttpRequest } from "../_entities";
import { Logger } from "../_lib/logger";
import { IUserDto } from "ddoll_packages";
import { IUserService } from "../service";
import { errorHandler } from "../controllers";
import { ResponseType } from "./";
import { HttpJsonResponse } from "../_entities";

export interface IUserController {
  createUser(req: IHttpRequest): Promise<HttpJsonResponse>;
  findAllUsers(req: IHttpRequest): Promise<HttpJsonResponse>;
  findOneUserById(req: IHttpRequest): Promise<HttpJsonResponse>;

  findOneUserByEmailPassword(req: IHttpRequest): Promise<HttpJsonResponse>;
  findOneUserByEmail(req: IHttpRequest): Promise<HttpJsonResponse>;
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

  async findAllUsers(req: IHttpRequest): Promise<HttpJsonResponse> {
    try {
      let userDto: IUserDto = {
        id: null,
        firstName: req.query?.firstName,
        email: req.query?.email,
        password: req.query?.password,
        lastName: req.query?.lastName,
        phoneNumber: req.query?.phoneNumber,
      };
      const users = await this.userService.findAllUsers(userDto);
      return ResponseType.responseIsJson(users);
    } catch (err) {
      errorHandler(err, this.logger);
    }
  }

  async findOneUserById(req: IHttpRequest): Promise<HttpJsonResponse> {
    try {
      const userId: number = req.params?.id;
      const users = await this.userService.findOneUserById(userId);
      return ResponseType.responseIsJson(users);
    } catch (err) {
      errorHandler(err, this.logger);
    }
  }

  async findOneUserByEmail(req: IHttpRequest): Promise<HttpJsonResponse> {
    try {
      const email: string = req.params?.email;
      const user = await this.userService.findOneUserByEmail(email);
      return ResponseType.responseIsJson(user);
    } catch (err) {
      errorHandler(err, this.logger);
    }
  }

  async findOneUserByEmailPassword(
    req: IHttpRequest
  ): Promise<HttpJsonResponse> {
    try {
      const email: string = req.query?.email;
      const password: string = req.query?.password;

      const user = await this.userService.findOneUserByEmailPassword(
        email,
        password
      );
      return ResponseType.responseIsJson(user);
    } catch (err) {
      errorHandler(err, this.logger);
    }
  }
}
