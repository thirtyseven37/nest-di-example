import { Module } from '@nestjs/common';
import { ReplacementService } from './replacement/replacement.service';
import { SHARED_SERVICE_DI_SYMBOL } from '../shared.interface';

@Module({
  providers: [{
    provide: SHARED_SERVICE_DI_SYMBOL,
    useClass: ReplacementService,
  }],
  exports: [SHARED_SERVICE_DI_SYMBOL]
})
export class Foo2Module {}
