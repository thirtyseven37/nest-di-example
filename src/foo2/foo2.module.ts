import { Module } from '@nestjs/common';
import { ReplacementService } from './replacement/replacement.service';
import { SHARED_SERVICE_DI_SYMBOL } from '../shared.interface';
import { SOME_SERVICE_TO_INJECT } from '../shared/shared.const';

@Module({
  providers: [{
    provide: SHARED_SERVICE_DI_SYMBOL,
    useClass: ReplacementService,
  }, {
    provide: SOME_SERVICE_TO_INJECT,
    useExisting: SHARED_SERVICE_DI_SYMBOL
  }],
  exports: [SHARED_SERVICE_DI_SYMBOL, SOME_SERVICE_TO_INJECT]
})
export class Foo2Module {}
