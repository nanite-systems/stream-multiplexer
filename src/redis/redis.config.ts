import { IsNotEmpty, IsString } from 'class-validator';

export class RedisConfig {
  @IsString()
  @IsNotEmpty()
  ingressRedisUrl = process.env.INGRESS_REDIS_URL;

  @IsString()
  @IsNotEmpty()
  publishRedisUrl = process.env.PUBLISH_REDIS_URL;
}
