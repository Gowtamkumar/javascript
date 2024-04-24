import "reflect-metadata";
import { RoleEnum } from "./enums/role.enum";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password?: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true, nullable: true })
  phone?: string;

  @Column({ name: "birth_day", nullable: true })
  birthday?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ name: "img_url", nullable: true })
  imgUrl?: string;

  @Column({ type: "enum", enum: RoleEnum, default: RoleEnum.User })
  role!: RoleEnum;

  // @Column({ name: "is_admin", type: "boolean", default: false })
  // isAdmin!: boolean;

  @Column({ type: "boolean", default: true })
  status!: boolean;

  @Column({ name: "reset_token", nullable: true })
  resetToken?: string;

  @Column({ name: "reset_token_expire", type: "bigint", nullable: true })
  resetTokenExpire?: number;

  @CreateDateColumn({ name: "created_at",type: "timestamp" })
  createdAt?: string;

  @UpdateDateColumn({ name: "updated_at",type: "timestamp" })
  updatedAt?: string;

  // tesnum!: number
  // getTestNUmber() {
  //   return this.tesnum = 100;
  // }
}
