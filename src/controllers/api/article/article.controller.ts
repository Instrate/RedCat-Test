import { Body, Controller, HttpStatus, Post, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { Path } from "../../../config/routes";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthorizationHeader, ResponseSchema, TypeRequestAccount } from "../../controllers.type";
import { EditorInterceptor } from "../../../interceptors/role.interceptor";
import { SessionGuard } from "../../../services/session/session.guard";
import { ClassValidationPipe } from "../../../pipes/class.pipe";
import { DtoArticleCreate } from "./article.input";

@ApiTags(Path.api.v1.article.root)
@ApiHeader(AuthorizationHeader)
@UseGuards(SessionGuard)
@Controller()
export class ArticleController {


  @ApiOperation({ description: "create article" })
  @ApiResponse({ status: HttpStatus.CREATED, type: ResponseSchema })
  @UseInterceptors(EditorInterceptor)
  @Post(Path.api.v1.article.root)
  create_article(
    @Req() { account }: TypeRequestAccount,
    @Body(new ClassValidationPipe(DtoArticleCreate, true, Path.api.v1.article.root)) body: DtoArticleCreate
  ) {
    console.log(account, body);
    return null;
  }


}
