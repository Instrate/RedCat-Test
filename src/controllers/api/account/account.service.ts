import { Injectable } from "@nestjs/common";
import { AccountService as AccountEntityService } from "../../../database/entities/account/account.service";
import * as process from "process";
import { EnumAccountRole } from "../../../database/entities/account/account.enum";
import { DtoAccountCreate } from "../auth/auth.input";
import { CreateMessagedResponse, DataNotFoundError } from "../../../config/error";
import { ApiResponseMessage } from "../../../config/response";

@Injectable()
export class AccountService {

  constructor(
    private readonly accountEntityService: AccountEntityService
  ) {
    this._createDefaultUsers();
  }

  async deleteAccount(email: string) {
    const deletion = await this.accountEntityService.deleteByEmail(email);
    if (!deletion) {
      throw DataNotFoundError;
    }
    return CreateMessagedResponse(ApiResponseMessage.account.deletionSuccessful);
  }

  private async _createDefaultUsers() {
    const prefix = process.env.CORE_ACCOUNT_DEFAULT_PREFIX;
    const roles_amount = Object.values(EnumAccountRole).length / 2;
    const data = Object
      .values(EnumAccountRole)
      .filter((val, ind) => (ind + 1) <= roles_amount)
      .map((val: string) => val.toLowerCase())
      .map((role: string, index) => {
        return {
          full_name: `${prefix} ${role}`,
          email: `${prefix}-${role}@mail.com`,
          password: `${prefix}-${index}-${role}`,
          role: index
        } as DtoAccountCreate;
      });
    return await Promise.all(data.map((val) => this.accountEntityService.create(val)));
  }

}
