import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionModule } from "../../../services/session/session.module";
import { EntitiesModule } from "../../../database/entities/entities.module";
import { CredentialModule } from "../../../services/credential/credential.module";

@Module({
  imports: [SessionModule, EntitiesModule, CredentialModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
