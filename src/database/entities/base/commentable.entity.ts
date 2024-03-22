import { BaseEntity } from "./base.entity";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export abstract class CommentableEntityEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300, nullable: true, default: null })
  internalComment: string | null;
}