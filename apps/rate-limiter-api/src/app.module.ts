import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenBucketModule } from './token-bucket/token-bucket.module';

@Module({
  imports: [TokenBucketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
