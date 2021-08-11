import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';
import { Foo2Module } from './foo2/foo2.module';

@Module({
  imports: [Foo2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
