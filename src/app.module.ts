import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Foo2Module } from './foo2/foo2.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [Foo2Module, SharedModule.register(Foo2Module)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
