import { IUserDto } from "ddoll_packages";
import { User } from "../_db/models";
// import { User } from "../../_db/models";

export class UserObj {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor() {}

  mapUserDtoToUser(userDto: IUserDto): void {
    this.id = userDto.id;
    this.firstName = userDto.firstName;
    this.lastName = userDto.lastName;
    this.email = userDto.email;
    this.phoneNumber = userDto.phoneNumber;
  }

  mapDomainObjToUser(dbObj: User): void {
    this.id = dbObj.id;
    this.firstName = dbObj.firstName;
    this.lastName = dbObj.lastName;
    this.email = dbObj.email;
    this.phoneNumber = dbObj.phoneNumber;
  }

  //   mapUserDbToUser(user: User): void {
  //     this.id = user.id;
  //     this.firstName = user.firstName;
  //     this.lastName = user.lastName;
  //     this.email = user.email;
  //     this.phoneNumber = user.phoneNumber;
  //   }
}
