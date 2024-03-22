import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { UpdatableValueModule } from './updatable-value/updatable-value.module';
import { ArticleModule } from './article/article.module';

const ModuleSet = [AccountModule, UpdatableValueModule];

@Module({
  imports: ModuleSet,
  exports: ModuleSet
})
export class EntitiesModule {}
