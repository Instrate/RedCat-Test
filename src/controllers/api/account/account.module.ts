import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { SessionModule } from "../../../services/session/session.module";
import { EntitiesModule } from "../../../database/entities/entities.module";
import { CredentialModule } from "../../../services/credential/credential.module";

@Module({
  imports: [SessionModule, EntitiesModule, CredentialModule],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
