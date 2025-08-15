import { Test, TestingModule } from '@nestjs/testing';
import { AplicationsController } from './aplications.controller';
import { AplicationsService } from './aplications.service';

describe('AplicationsController', () => {
  let controller: AplicationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AplicationsController],
      providers: [AplicationsService],
    }).compile();

    controller = module.get<AplicationsController>(AplicationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
