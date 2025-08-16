import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AplicationsModule } from 'src/aplications/aplications.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AplicationsModule]
})
export class UsersModule {}
