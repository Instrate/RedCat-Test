import { Column, Entity, JoinColumn, OneToMany, OneToOne, Relation } from "typeorm";
import { UpdatableValueEntity } from "../updatable-value/updatable-value.entity";
import { EnumAccountRole } from "./account.enum";
import { BaseEntity } from "../base/base.entity";
import { ArticleEntity } from "../article/article.entity";

export const AccountEntityName = "account";

@Entity({
  name: AccountEntityName
})
export class AccountEntity extends BaseEntity {
  @Column(
    {
      type: "enum",
      enum: EnumAccountRole,
      default: EnumAccountRole.Viewer
    }
  )
  role!: EnumAccountRole;

  @OneToOne(() => UpdatableValueEntity, {
    cascade: true,
    onDelete: "CASCADE",
    orphanedRowAction: "delete"
  })
  @JoinColumn()
  email!: Relation<UpdatableValueEntity>;

  @OneToOne(() => UpdatableValueEntity, {
    cascade: true,
    onDelete: "CASCADE",
    orphanedRowAction: "delete"
  })
  @JoinColumn()
  password!: Relation<UpdatableValueEntity>;

  @OneToMany(() => ArticleEntity, (article) => article.author, {
    cascade: true,
    onDelete: "CASCADE"
  })
  articles!: Relation<ArticleEntity[]>;
}