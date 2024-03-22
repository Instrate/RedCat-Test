import { Module } from '@nestjs/common';
import { UpdatableValueService } from './updatable-value.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UpdatableValueEntity } from "./updatable-value.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UpdatableValueEntity])
  ],
  providers: [UpdatableValueService],
  exports: [UpdatableValueService]
})
export class UpdatableValueModule {}
