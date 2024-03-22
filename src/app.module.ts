import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { ControllersModule } from './controllers/controllers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ServicesModule, ControllersModule, DatabaseModule],
  providers: [AppService],
})
export class AppModule {}
