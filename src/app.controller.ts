import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SharedService } from './shared/shared/shared.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sharedService: SharedService,
  ) {}

  @Get()
  getHello(): number {
    return this.appService.getHelloNumber();
  }

  @Get('shared')
  getShared(): number {
    return this.sharedService.doSomething();
  }
}
