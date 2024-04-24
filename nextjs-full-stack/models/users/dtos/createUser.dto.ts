import { RoleEnum } from "../enums/role.enum";

export interface CreateUserDto {
  name: string;
  username: string;
  password: string;
  resetToken?: string;
  resetTokenExpire?: number;
  role?: RoleEnum;
  status?: boolean;
}
