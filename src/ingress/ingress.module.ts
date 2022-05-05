import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { registerStream } from './utils/register.stream';
import { EVENT_STREAM, WORLD_CHANGE_STREAM } from './constants';
import { StreamFactory } from './factories/stream.factory';

@Module({
  imports: [RedisModule],
  providers: [
    StreamFactory,

    registerStream(EVENT_STREAM, 'events'),
    registerStream(WORLD_CHANGE_STREAM, 'world-changes'),
  ],
  exports: [EVENT_STREAM, WORLD_CHANGE_STREAM],
})
export class IngressModule {}
