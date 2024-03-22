import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseInput } from "./base.input";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: string;
}