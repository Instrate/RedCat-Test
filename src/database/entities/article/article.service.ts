import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ArticleEntity } from "./article.entity";

@Injectable()
export class ArticleService {


  constructor(
    @InjectRepository(ArticleEntity)
    private readonly repo: Repository<ArticleEntity>
  ) {

  }

  findByAuthor(author_email: string) {
    return this.repo.find({
      relations: {
        author: true
      },
      where: {
        author: {
          email: {
            value: author_email
          }
        }
      }
    });
  }


}
