import { Module } from '@nestjs/common';
import { ProcessorModule } from '../processor/processor.module';
import { configProvider } from '../utils/config.helper';
import { PublisherConfig } from './publisher.config';
import { PublisherService } from './services/publisher.service';
import { WorldStateController } from './controllers/world-state.controller';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [ProcessorModule, RedisModule],
  providers: [PublisherService, configProvider(PublisherConfig)],
  controllers: [WorldStateController],
})
export class PublisherModule {}
