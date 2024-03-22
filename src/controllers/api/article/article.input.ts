import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class DtoArticleCreate {
  @ApiProperty({ minLength: 15, maxLength: 100 })
  @MaxLength(100)
  @MinLength(5)
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({ minLength: 200, maxLength: 5000 })
  @MaxLength(5000)
  @MinLength(200)
  @IsNotEmpty()
  @IsString()
  text!: string;
}