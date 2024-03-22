import { Injectable } from "@nestjs/common";
import { DtoAccountCreate, DtoAccountLogin } from "./auth.input";
import { ApiResponseMessage } from "../../../config/response";
import { SessionService } from "../../../services/session/session.service";
import { ResponseSchema } from "../../controllers.type";
import { AccountService } from "../../../database/entities/account/account.service";
import { CredentialService } from "../../../services/credential/credential.service";
import {
  ConflictLoginException,
  ConflictRegisterException,
  CreateMessagedResponse,
  UnauthorizedPasswordError
} from "../../../config/error";

@Injectable()
export class AuthService {

  constructor(
    private readonly sessionService: SessionService,
    private readonly accountService: AccountService,
    private readonly credService: CredentialService
  ) {
  }

  async register(data: DtoAccountCreate) {
    const account = await this.accountService.create(data);
    if (!account) {
      throw ConflictRegisterException;
    }
    return this.login(data).then((val: ResponseSchema) => {
      return { ...val, ...CreateMessagedResponse(ApiResponseMessage.account.creationSuccess) };
    });
  }


  async login({ email, password }: DtoAccountLogin): Promise<ResponseSchema<string>> {
    const account = await this.accountService.findByEmail(email);
    if (!account) {
      throw ConflictLoginException;
    }
    if (!await this.credService.ValidateHash(password, account.password.value, false)) {
      throw UnauthorizedPasswordError;
    }
    const session = SessionService.create({ email, role: account.role });
    await this.sessionService.sessionUpdate(email, session);
    return { data: session };
  }


}
