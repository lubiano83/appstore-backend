import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicationsModule } from './aplications/aplications.module';
import { UsersModule } from './users/users.module';
import { ResenasModule } from './resenas/resenas.module';

@Module({
  imports: [AplicationsModule, UsersModule, ResenasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
