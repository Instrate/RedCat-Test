import { ConflictException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ApiResponseMessage } from "./response";

export function CreateMessagedResponse(...messages: string[]) {
  return {
    message: messages
  };
}

export const UnauthorizedSessionError = new UnauthorizedException(CreateMessagedResponse(ApiResponseMessage.account.tokenInvalid));

export const ConflictLoginException = new ConflictException(CreateMessagedResponse(ApiResponseMessage.account.notFoundError));

export const ConflictRegisterException = new ConflictException(CreateMessagedResponse(ApiResponseMessage.account.creationError));

export const UnauthorizedPasswordError = new UnauthorizedException(CreateMessagedResponse(ApiResponseMessage.account.passwordIncorrect));

export const PermissionError = new UnauthorizedException(CreateMessagedResponse(ApiResponseMessage.account.permissionsInvalid));

export const DataNotFoundError = new NotFoundException(CreateMessagedResponse(ApiResponseMessage.account.notFoundError));