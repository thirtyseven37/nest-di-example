import { Injectable } from '@nestjs/common';
import { SharedInterface } from '../../shared.interface';

@Injectable()
export class OriginalService implements SharedInterface {
  doSomething(input: string): number {
    return input.length;
  }
}
