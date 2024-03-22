import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountEntity } from "../account/account.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity])
  ],
  providers: [ArticleService],
  exports: [ArticleService]
})
export class ArticleModule {}
