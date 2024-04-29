import { RoleEnum } from "../enums/role.enum";

export interface CreateUserDto {
  name: string;
  username: string;
  password: string;
  resetToken?: string;
  role?: RoleEnum;
  status?: boolean;
}
