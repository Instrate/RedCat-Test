import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountEntity, AccountEntityName } from "./account.entity";
import { AccountService } from './account.service';
import { UpdatableValueModule } from "../updatable-value/updatable-value.module";
import { ServicesModule } from "../../../services/services.module";

@Module({
  imports: [
    ServicesModule,
    TypeOrmModule.forFeature([
      AccountEntity
    ]),
    UpdatableValueModule
  ],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}
