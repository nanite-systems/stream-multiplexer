import { Module } from '@nestjs/common';
import { configProvider } from '../utils/config.helper';
import { RedisConfig } from './redis.config';
import { REDIS_INGRESS, REDIS_PUBLISH } from './constants';
import { RedisFactory } from './factories/redis.factory';

@Module({
  providers: [
    RedisFactory,
    configProvider(RedisConfig),

    {
      provide: REDIS_INGRESS,
      useFactory: (factory: RedisFactory, config: RedisConfig) =>
        factory.create(config.ingressRedisUrl, 'RedisIngress'),
      inject: [RedisFactory, RedisConfig],
    },
    {
      provide: REDIS_PUBLISH,
      useFactory: (factory: RedisFactory, config: RedisConfig) =>
        factory.create(config.publishRedisUrl, 'RedisPublish'),
      inject: [RedisFactory, RedisConfig],
    },
  ],
  exports: [REDIS_INGRESS, REDIS_PUBLISH],
})
export class RedisModule {}
