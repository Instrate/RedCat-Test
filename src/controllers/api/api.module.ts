import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { AccountModule } from './account/account.module';

const ModuleSet = [AuthModule, AccountModule, ArticleModule];

@Module({
  imports: ModuleSet,
})
export class ApiModule {}
