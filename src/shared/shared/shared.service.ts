import { Inject, Injectable } from '@nestjs/common';
import { SharedInterface } from '../../shared.interface';
import { SOME_SERVICE_TO_INJECT } from '../shared.const';

@Injectable()
export class SharedService {
  constructor(
    @Inject(SOME_SERVICE_TO_INJECT)
    private readonly someService: SharedInterface,
  ) {}

  doSomething() {
    return this.someService.doSomething('7');
  }
}
