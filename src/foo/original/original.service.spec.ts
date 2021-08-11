import { Test, TestingModule } from '@nestjs/testing';
import { OriginalService } from './original.service';

describe('OriginalService', () => {
  let service: OriginalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OriginalService],
    }).compile();

    service = module.get<OriginalService>(OriginalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
