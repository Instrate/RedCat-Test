import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { SessionModule } from "../../../services/session/session.module";
import { EntitiesModule } from "../../../database/entities/entities.module";
import { CredentialModule } from "../../../services/credential/credential.module";

@Module({
  imports: [SessionModule, EntitiesModule, CredentialModule],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
