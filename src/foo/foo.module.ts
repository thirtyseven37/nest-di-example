import { Module } from '@nestjs/common';
import { OriginalService } from './original/original.service';
import { SHARED_SERVICE_DI_SYMBOL } from '../shared.interface';

@Module({
  providers: [
    {
      provide: SHARED_SERVICE_DI_SYMBOL,
      useClass: OriginalService,
    },
  ],
  exports: [SHARED_SERVICE_DI_SYMBOL],
})
export class FooModule {}
