import { Module } from '@nestjs/common';
import { AplicationsService } from './aplications.service';
import { AplicationsController } from './aplications.controller';

@Module({
  controllers: [AplicationsController],
  providers: [AplicationsService],
  exports: [AplicationsService]
})
export class AplicationsModule {}
