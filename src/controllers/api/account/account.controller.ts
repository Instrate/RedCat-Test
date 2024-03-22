import { Controller, Delete, Get, HttpStatus, Query, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Path } from "../../../config/routes";
import { AuthorizationHeader, ResponseSchema, TypeRequestAccount } from "../../controllers.type";
import { AccountInterceptor, AdminInterceptor } from "../../../interceptors/role.interceptor";
import { ClassValidationPipe } from "../../../pipes/class.pipe";
import { DtoAccount } from "./account.input";
import { SessionGuard } from "../../../services/session/session.guard";
import { EnumAccountRole } from "../../../database/entities/account/account.enum";
import { PermissionError } from "../../../config/error";
import { AccountService } from "./account.service";


@ApiTags(Path.api.v1.account.root)
@ApiHeader(AuthorizationHeader)
@UseGuards(SessionGuard)
@Controller()
export class AccountController {

  constructor(private readonly service: AccountService) {
  }

  @UseInterceptors(AdminInterceptor)
  @Get(Path.api.v1.account.root)
  getAccounts() {
    return null;
  }


  @ApiOperation({ description: "delete account" })
  @ApiResponse({ status: HttpStatus.OK, type: ResponseSchema })
  @UseInterceptors(AccountInterceptor)
  @Delete(Path.api.v1.account.root)
  deleteAccount(
    @Req() { account }: TypeRequestAccount,
    @Query(new ClassValidationPipe(DtoAccount, true, Path.api.v1.account.root)) query?: DtoAccount
  ) {
    if (!!query?.email?.length && account.role !== EnumAccountRole.Admin) {
      throw PermissionError;
    }
    return this.service.deleteAccount(query?.email || account.email.value);
  }

}
