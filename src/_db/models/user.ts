import { IUserDto } from "ddoll_packages";

import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  AutoIncrement,
  DataType,
  PrimaryKey,
  UpdatedAt,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
//   import { PasswordResetToken } from "./resetPasswordToken";
// import { Optional } from "sequelize";

// interface UserCreationAttributes extends Optional<IUser, "resetToken"> {}

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({
    unique: true,
  })
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
