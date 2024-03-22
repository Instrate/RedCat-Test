import { BaseInput } from "./base.input";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "./base.entity";


export abstract class ArchivableEntity extends BaseEntity {
  @Column({ type: 'boolean', default: false })
  isArchived: boolean;
}