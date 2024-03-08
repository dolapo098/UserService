import { Op } from "sequelize";
import { UserObj } from "../_entities";
import { User } from "../_db/models";
import { SequelizeErrorTypes } from "../_exceptions";
import { FieldValidator } from "../_helper";

export interface IUserRepository {
  registerUser(user: UserObj): Promise<User>;
  findAllUsers(requiredKeys: Array<string>, user: UserObj): Promise<User[]>;
  findOneUserById(id: number): Promise<User>;

  findOneUserByEmailPassword(email: string, password: string): Promise<User>;
  findOneUserByEmail(email: string): Promise<User>;
}

export class UserRepository implements IUserRepository {
  dbUserObj: typeof User;
  dbErrorTypes: typeof SequelizeErrorTypes;
  fieldValidator: typeof FieldValidator;

  constructor(
    dbUserObj: typeof User,
    dbErrorTypes: typeof SequelizeErrorTypes
  ) {
    this.dbUserObj = dbUserObj;
    this.dbErrorTypes = dbErrorTypes;
  }

  async registerUser(user: UserObj): Promise<User> {
    try {
      const registeredUser = await this.dbUserObj.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
      });
      return registeredUser ?? null;
    } catch (err) {
      this.dbErrorTypes.checkErrorType(err);
    }
  }

  async findAllUsers(
    requiredKeys: Array<string>,
    userObj: UserObj
  ): Promise<User[]> {
    try {
      let queryClause = {};
      // if (query) {
      //   queryClause = { firstName: { [Op.substring]: query } };
      // }

      requiredKeys.forEach((val) => {
        queryClause[val] = userObj[val];
      });

      const user = await this.dbUserObj.findAll({
        where: queryClause,
      });

      return user ?? null;
    } catch (err) {
      this.dbErrorTypes.checkErrorType(err);
    }
  }

  async findOneUserById(id: number): Promise<User> {
    try {
      const user = await this.dbUserObj.findOne({
        where: { id: id },
      });

      return user ?? null;
    } catch (err) {
      this.dbErrorTypes.checkErrorType(err);
    }
  }

  async findOneUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.dbUserObj.findOne({
        where: { email: email },
      });

      return user ?? null;
    } catch (err) {
      this.dbErrorTypes.checkErrorType(err);
    }
  }

  async findOneUserByEmailPassword(
    email: string,
    password: string
  ): Promise<User> {
    try {
      console.log(password, email);
      const user = await this.dbUserObj.findOne({
        where: { [Op.and]: [{ email: email }, { password: password }] },
      });

      return user ?? null;
    } catch (err) {
      this.dbErrorTypes.checkErrorType(err);
    }
  }
}
