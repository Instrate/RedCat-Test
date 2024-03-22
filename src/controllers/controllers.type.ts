import { ApiProperty } from "@nestjs/swagger";
import { SessionInterface } from "../services/session/session.interface";
import { Request } from "express";
import { AccountEntity } from "../database/entities/account/account.entity";

export class ResponseSchema<Type = unknown> {
  @ApiProperty({ required: false, type: [String]})
  message?: string | string[];

  @ApiProperty({ required: false })
  data: Type;
}

export type TypeRequestSession = Request & { session: SessionInterface };

export type TypeRequestAccount = TypeRequestSession & {
  account: AccountEntity;
};

export const AuthorizationHeader = { name: "Authorization", description: "Bearer token"};