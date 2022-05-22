import { Module } from '@nestjs/common';
import IORedis from 'ioredis';
import { RedisConfig } from './redis.config';
import { ConfigModule } from '@census-reworked/nestjs-utils';

@Module({
  imports: [ConfigModule.forFeature([RedisConfig])],
  providers: [
    {
      provide: IORedis,
      useFactory: (config: RedisConfig) => new IORedis(config.url),
      inject: [RedisConfig],
    },
  ],
  exports: [IORedis],
})
export class RedisModule {}
