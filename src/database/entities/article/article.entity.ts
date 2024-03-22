import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { AccountEntity } from "../account/account.entity";
import { BaseEntity } from "../base/base.entity";

export const ArticleEntityName = "article";

@Entity({
  name: ArticleEntityName
})
export class ArticleEntity extends BaseEntity {
  @ManyToOne(() => AccountEntity, (author) => author.articles)
  @JoinColumn()
  author!: Relation<AccountEntity>;

  @Column()
  name!: string;

  @Column()
  text!: string;
}