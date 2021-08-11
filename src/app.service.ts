import { Inject, Injectable } from '@nestjs/common';
import { SHARED_SERVICE_DI_SYMBOL, SharedInterface } from './shared.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject(SHARED_SERVICE_DI_SYMBOL)
    private readonly myServiceWhichImplementsMyInterface: SharedInterface
  ) {
  }

  getHelloNumber(): number {
    return this.myServiceWhichImplementsMyInterface.doSomething('Hello World!');
  }
}
