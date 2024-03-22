import { EnumAccountRole } from "../database/entities/account/account.enum";
import { CallHandler, ConflictException, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { UnauthorizedSessionError } from "../config/error";
import { TypeRequestAccount, TypeRequestSession } from "../controllers/controllers.type";
import { Observable } from "rxjs";
import { AccountService } from "../database/entities/account/account.service";


const CreateRoleInterceptorCallback = (role: EnumAccountRole) => (context: ExecutionContext, next: CallHandler) => {
  const request: TypeRequestSession = context.switchToHttp().getRequest();
  if (role > request.session.role) {
    throw UnauthorizedSessionError;
  }
  return next.handle().pipe();
};


@Injectable()
export class AdminInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return CreateRoleInterceptorCallback(EnumAccountRole.Admin)(context, next);
  }
}

@Injectable()
export class EditorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return CreateRoleInterceptorCallback(EnumAccountRole.Editor)(context, next);
  }
}

@Injectable()
export class ViewerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return CreateRoleInterceptorCallback(EnumAccountRole.Viewer)(context, next);
  }
}

@Injectable()
export class AccountInterceptor implements NestInterceptor {

  constructor(
    private readonly accountEntityService: AccountService
  ) {
  }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const request: TypeRequestAccount = context.switchToHttp().getRequest();
    return this.accountEntityService.findByEmail(request.session.email).then((value) => {
      if (!value) {
        throw ConflictException;
      }
      request.account = value;
    }).then(() => next.handle().pipe());
  }
}

