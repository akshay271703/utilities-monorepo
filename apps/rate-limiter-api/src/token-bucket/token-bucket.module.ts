import { Module } from "@nestjs/common";
import { TokenBucketService } from "./token-bucket.service";
import { TokenBucketController } from "./token-bucket.controller";

@Module({
    imports: [],
    controllers: [TokenBucketController],
    providers: [TokenBucketService],
    exports: [TokenBucketService],
})
export class TokenBucketModule {}