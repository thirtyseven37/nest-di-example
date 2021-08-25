import { Injectable } from '@nestjs/common';
import { SharedInterface } from '../../shared.interface';

@Injectable()
export class ReplacementService implements SharedInterface {
  private readonly someRand: number;

  constructor() {
    this.someRand = Math.random();
  }

  doSomething(input: string): number {
    console.log(`using service with random ${this.someRand}`);
    return input.length + 37;
  }
}
