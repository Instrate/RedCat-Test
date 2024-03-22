
import { IsInt, IsNotEmpty, IsNumberString, IsString, Matches, Max, Min } from "class-validator";
import { PortRegexp } from "./env.constant";
import { Type } from "class-transformer";

export class EnvSchema {

  @IsNotEmpty()
  @IsString()
  DATABASE_HOST!: string;

  @Matches(PortRegexp)
  @IsNumberString({ no_symbols: true })
  DATABASE_PORT: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_USERNAME!: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_PASSWORD!: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_NAME!: string;

  // @Matches(PortRegexp)
  // @IsNumberString({ no_symbols: true })
  @Max(65535)
  @Min(1)
  @IsInt()
  @Type(() => Number)
  APPLICATION_PORT!: number;

  // @Matches(/^(1[0-5]|[1-9])$/gds)
  // @IsNumberString({ no_symbols: true })
  // @IsString()
  @Max(15)
  @Min(1)
  @IsInt()
  @Type(() => Number)
  DATABASE_DATA_HASH_ITERATIONS!: number;

  @IsNotEmpty()
  @IsString()
  CORE_ACCOUNT_DEFAULT_PREFIX!: string;
}