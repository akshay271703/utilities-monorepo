import { Injectable } from '@nestjs/common';
import { TokenBucketRateLimiterService } from './token-bucket';
import { TokenBucketResponse } from './dto/response.dto';

type IPAddress = string;
@Injectable()
export class TokenBucketService {
  private readonly bucketToken: Map<IPAddress, TokenBucketRateLimiterService> =
    new Map();
  constructor() {
    this.bucketToken = new Map<IPAddress, TokenBucketRateLimiterService>();
  }

  createTokenBucketRateLimiter(
    ip: IPAddress,
    bucketSize: number,
    refillRate: number,
  ): void {
    if (!this.bucketToken.has(ip)) {
      const rateLimiter = new TokenBucketRateLimiterService(
        bucketSize,
        refillRate,
      );
      this.bucketToken.set(ip, rateLimiter);
      rateLimiter.refillBucket();

      setTimeout(
        () => {
          this.bucketToken.delete(ip);
        },
        10 * 60 * 1000,
      ); // 10 minutes
    } else {
      throw new Error(
        `Rate limiter for IP ${ip} already exists. Please use a different IP or wait for 10 minutes to reset the rate limiter.`,
      );
    }
  }

  validateTokenBucket(ip: IPAddress): TokenBucketResponse {
    const resource = this.bucketToken.get(ip);
    if (!resource) {
      throw new Error(`Rate limiter for IP ${ip} does not exist.`);
    }
    resource.consume();
    return resource.getStatus();
  }

  getListOfAllIps(): IPAddress[] {
    return Array.from(this.bucketToken.keys());
  }
}
