import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { EVENT_INGRESS, WORLD_STATE_INGRESS } from './constants';
import { StreamFactory } from './factories/stream.factory';
import { configProvider } from '../utils/config.helper';
import { IngressConfig } from './ingress.config';

@Module({
  imports: [RedisModule],
  providers: [
    StreamFactory,
    configProvider(IngressConfig),

    {
      provide: EVENT_INGRESS,
      useFactory: (factory: StreamFactory, config: IngressConfig) =>
        factory.create(config.eventChannel),
      inject: [StreamFactory, IngressConfig],
    },
    {
      provide: WORLD_STATE_INGRESS,
      useFactory: (factory: StreamFactory, config: IngressConfig) =>
        factory.create(config.worldStateChannel),
      inject: [StreamFactory, IngressConfig],
    },
  ],
  exports: [EVENT_INGRESS, WORLD_STATE_INGRESS],
})
export class IngressModule {}
