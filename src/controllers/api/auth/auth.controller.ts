import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { Path } from "../../../config/routes";
import { AuthService } from "./auth.service";
import { ClassValidationPipe } from "../../../pipes/class.pipe";
import { DtoAccountCreate, DtoAccountLogin } from "./auth.input";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponseSchema } from "../../controllers.type";

@ApiTags(Path.api.v1.auth.root)
@Controller()
export class AuthController {

  constructor(private readonly service: AuthService) {
  }

  @ApiOperation({ description: "register user" })
  @ApiResponse({ status: HttpStatus.CREATED, type: ResponseSchema })
  @Post(Path.api.v1.auth.register)
  register_account(
    @Body(new ClassValidationPipe(DtoAccountCreate, true, Path.api.v1.auth.register)) body: DtoAccountCreate
  ) {
    return this.service.register(body);
  }

  @ApiOperation({ description: "login user" })
  @ApiResponse({ status: HttpStatus.CREATED, type: ResponseSchema })
  @Post(Path.api.v1.auth.login)
  login(
    @Body(new ClassValidationPipe(DtoAccountLogin, true, Path.api.v1.auth.login)) body: DtoAccountLogin
  ) {
    return this.service.login(body);
  }


}
