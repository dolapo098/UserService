import { Request } from "express";
import { IUserDto } from "ddoll_packages";
import { UserObj } from "../_entities";

import { IUserRepository } from "../repositories";
import { FieldValidator } from "../_helper";
import { UserNotFoundException, CustomServiceException } from "../_exceptions";

export interface IUserService {
  createUser(req: IUserDto): Promise<UserObj>;
  findAllUsers(req: IUserDto): Promise<UserObj[]>;
  findOneUserById(id: number): Promise<UserObj>;

  findOneUserByEmailPassword(email: string, password: string): Promise<UserObj>;
  findOneUserByEmail(email: string): Promise<UserObj>;
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
    try {
      const params = req;

      let requiredFields = ["firstName", "lastName"];
      this.fieldValidator.validateRequiredFields(requiredFields, params);
      this.userObj.mapUserDtoToUser(params);
      const user = await this.userRepo.registerUser(this.userObj);
      if (user === null) return null;
      this.userObj.mapDomainObjToUser(user);
      return this.userObj;
    } catch (err) {
      throw err;
    }
  }

  async findAllUsers(params: IUserDto): Promise<UserObj[]> {
    try {
      this.userObj.mapUserDtoToUser(params);
      let queryKeys = this.fieldValidator.validateReturnKeys(
        ["firstName", "lastName", "email", "phoneNumber"],
        this.userObj
      );

      const dbUsers = await this.userRepo.findAllUsers(queryKeys, this.userObj);
      if (dbUsers.length === 0) throw new UserNotFoundException();
      const users: UserObj[] = dbUsers.map(
        ({ id, firstName, lastName, email, phoneNumber }) => ({
          id: Number(id),
          firstName,
          lastName,
          email,
          phoneNumber,
        })
      ) as UserObj[];
      return users;
    } catch (err) {
      throw err;
      // throw new CustomServiceException(err.message, err?.name);
    }
  }

  async findOneUserById(id: number): Promise<UserObj> {
    try {
      const user = await this.userRepo.findOneUserById(id);
      if (user === null) throw new UserNotFoundException();
      this.userObj.mapDomainObjToUser(user);
      return this.userObj;
    } catch (err) {
      throw err;
    }
  }

  async findOneUserByEmailPassword(
    email: string,
    password: string
  ): Promise<UserObj> {
    try {
      const user = await this.userRepo.findOneUserByEmailPassword(
        email,
        password
      );

      if (user === null) throw new UserNotFoundException();
      this.userObj.mapDomainObjToUser(user);
      return this.userObj;
    } catch (err) {
      throw err;
    }
  }

  async findOneUserByEmail(email: string): Promise<UserObj> {
    try {
      const user = await this.userRepo.findOneUserByEmail(email);
      if (user === null) throw new UserNotFoundException();
      this.userObj.mapDomainObjToUser(user);
      return this.userObj;
    } catch (err) {
      throw err;
    }
  }
}
