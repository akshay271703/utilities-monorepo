import { Body, Controller, Get, Post } from '@nestjs/common';
import { TokenBucketService } from './token-bucket.service';
import { CreateTokenBucketRequestDto } from './dto/request.dto';
import { Request } from 'express';

@Controller('/token-bucket')
export class TokenBucketController {
  constructor(private readonly service: TokenBucketService) {}

  @Post('')
  createTokenBucket(
    @Body() body: CreateTokenBucketRequestDto,
    request: Request,
  ) {
    this.service.createTokenBucketRateLimiter(
      request?.ip || '127.0.0.1',
      body.bucketSize,
      body.refillRate,
    );
    return { message: 'Token bucket created successfully.', ...body };
  }

  @Get('/')
  validateRateLimiter(request: Request) {
    const ip = request?.ip || '127.0.0.1';
    return this.service.validateTokenBucket(ip);
  }

  @Get('/status')
  getStatus() {
    return this.service.getListOfAllIps();
  }
}
