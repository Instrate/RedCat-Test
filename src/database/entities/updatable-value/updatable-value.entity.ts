import { Column, Entity, ManyToOne, Relation } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { EnumUpdatableValueType } from "./updatable-value.enum";
import { AccountEntity } from "../account/account.entity";

export const UpdatableValueEntityName = "updatable-value";

@Entity({
  name: UpdatableValueEntityName
})
export class UpdatableValueEntity extends BaseEntity {
  @ManyToOne(() => AccountEntity)
  owner!: Relation<AccountEntity>;

  @Column({ type: "varchar" })
  value!: string;

  @Column({
    type: "enum",
    enum: EnumUpdatableValueType
  })
  type!: EnumUpdatableValueType;
}