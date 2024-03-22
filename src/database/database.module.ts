import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import * as process from "process";
import { Entities } from "./entities/entities.constant";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      logging: true,
      logger: "advanced-console",
      entities: Entities,
      synchronize: true,
      ssl: process.env.DATABASE_SSL_MODE === "true",
    }),
    EntitiesModule
  ]
})
export class DatabaseModule {}
