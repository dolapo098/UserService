import { Request } from "express";
import { IUserDto } from "ddoll_packages";
import { UserObj } from "../_entities";

import { IUserRepository } from "../repositories";
import { FieldValidator } from "../_helper";
import { MissingResourceException } from "../_exceptions";

export interface IUserService {
  createUser(req: IUserDto): Promise<UserObj>;
}

export class UserService implements IUserService {
  private readonly fieldValidator: typeof FieldValidator;
  private readonly userRepo: IUserRepository;
  private readonly userObj: UserObj;

  constructor(
    fieldValidator: typeof FieldValidator,
    userRepo: IUserRepository,
    userObj: UserObj
  ) {
    this.fieldValidator = fieldValidator;
    this.userRepo = userRepo;
    this.userObj = userObj;
  }

  async createUser(req: IUserDto): Promise<UserObj> {
    const params = req;

    let requiredFields = ["firstName", "lastName"];
    this.fieldValidator.validateRequiredFields(requiredFields, params);
    this.userObj.mapUserDtoToUser(params);
    const dbUser = await this.userRepo.registerUser(this.userObj);
    this.userObj.mapDomainObjToUser(dbUser);
    return this.userObj;
  }
}
