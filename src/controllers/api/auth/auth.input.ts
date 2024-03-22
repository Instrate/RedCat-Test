import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches } from "class-validator";

export class DtoAccountGet {
  @ApiProperty()
  @IsEmail()
  readonly email!: string;
}

export class DtoAccountLogin extends DtoAccountGet {
  @ApiProperty({ description: "RegEx: /^([\\s\\S]{8,40})$/gs" })
  @Matches(/^([\s\S]{8,40})$/gs)
  @IsString()
  readonly password!: string;
}

export class DtoAccountCreate extends DtoAccountLogin {
  @ApiProperty({ description: "RegEx: /^([A-Z][a-z]{1,15})+(?: ([A-Z][a-z]{1,15}){1,15})?$/gs" })
  @Matches(/^([A-Z][a-z]{1,15})+(?: ([A-Z][a-z]{1,15}){1,15})?$/gs)
  @IsString()
  readonly full_name!: string;
}