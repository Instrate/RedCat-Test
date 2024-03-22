import { IsEmail, IsEnum, IsInt } from "class-validator";
import { EnumAccountRole } from "../../database/entities/account/account.enum";

export class SessionInterface {
  @IsEmail()
  email!: string;

  @IsEnum(EnumAccountRole)
  role!: EnumAccountRole;

  @IsInt()
  exp!: number;

  @IsInt()
  iat!: number;
}

export interface SessionConfigInterface {
  alg: Algorithm;
}
