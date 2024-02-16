import {IUserDto} from 'ddoll_packages'


import {
    Table,
    Column,
    Model,
    HasMany,
    CreatedAt,
    UpdatedAt,
  } from "sequelize-typescript";
//   import { PasswordResetToken } from "./resetPasswordToken";
  // import { Optional } from "sequelize";

  
  // interface UserCreationAttributes extends Optional<IUser, "resetToken"> {}
  
  @Table
  export class User extends Model<IUserDto> {
    @Column
    id: number;
  
    @Column
    firstName: string;
  
    @Column
    lastName: string;
  
    @Column
    email: string;
  
    @Column
    phoneNumber: string;
  
    @Column
    password: string;
  
    @Column
    hashPassword: string;
  
    @CreatedAt
    @Column
    createdAt?: Date;
  
    @UpdatedAt
    @Column
    updatedAt?: Date;
  
    // @HasMany(() => PasswordResetToken)
    // resetUserTokens: PasswordResetToken[];
  }
  