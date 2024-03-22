import { BaseInput } from "./base.input";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "./base.entity";


export abstract class ActivableEntity extends BaseEntity {
  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;

  @Column({ type: 'varchar', length: 300, nullable: true, default: null })
  internalComment: string | null;
}