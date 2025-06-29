import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { TokenBucketResponse } from './dto/response.dto';

const ONE_SECOND = 1000;
export class TokenBucketRateLimiterService {
  private bucketSize: number;
  private refillRate: number;
  private currentBucketCount: number;

  constructor(bucketSize: number, refillRate: number) {
    this.bucketSize = bucketSize || 5;
    this.refillRate = refillRate || 3;
    this.currentBucketCount = bucketSize || 5;
  }

  refillBucket() {
    // Every 10 seconds add new tokens as per refill rate
    setInterval(() => {
      const tokensToAdd = this.refillRate;
      this.currentBucketCount = Math.min(
        this.bucketSize,
        this.currentBucketCount + tokensToAdd - 1,
      );
    }, ONE_SECOND * 10);
  }

  consume() {
    if (this.currentBucketCount < 1) {
      throw new HttpException(
        { message: 'Too Many Requests - Rate limit exceeded.' },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    this.currentBucketCount -= 1;
  }

  getStatus(): TokenBucketResponse {
    return {
      bucketSize: this.bucketSize,
      refillRate: this.refillRate,
      currentBucketCount: this.currentBucketCount,
    };
  }
}
