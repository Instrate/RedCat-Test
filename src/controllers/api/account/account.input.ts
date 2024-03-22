import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional } from "class-validator";


export class DtoAccount {
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  readonly email?: string;
}