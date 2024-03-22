import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';

const ModuleSet = [ApiModule];

@Module({
  imports: ModuleSet,
})
export class ControllersModule {}
