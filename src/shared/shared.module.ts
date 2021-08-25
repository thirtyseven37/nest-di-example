import { DynamicModule, Module } from '@nestjs/common';
import { SharedService } from './shared/shared.service';

@Module({})
export class SharedModule {
  static register(moduleThatExportsServiceToInject: any): DynamicModule {
    return {
      module: SharedModule,
      providers: [SharedService],
      imports: [moduleThatExportsServiceToInject],
      exports: [SharedService]
    };
  }
}
