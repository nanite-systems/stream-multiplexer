import { RedisModule as RedisModuleFactory } from '@nestjs-modules/ioredis';
import * as assert from 'assert';

export const RedisModule = RedisModuleFactory.forRootAsync({
  useFactory: () => {
    assert(process.env.REDIS_URL, 'REDIS_URL is not defined');

    return {
      config: {
        url: process.env.REDIS_URL,
      },
    };
  },
});
