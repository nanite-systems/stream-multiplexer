import { Module } from '@nestjs/common';
import { PublisherConfig } from './publisher.config';
import { PublisherService } from './services/publisher.service';
import { WorldStateController } from './controllers/world-state.controller';
import { RedisModule } from '../redis/redis.module';
import { ConfigModule } from '@census-reworked/nestjs-utils';

@Module({
  imports: [RedisModule, ConfigModule.forFeature([PublisherConfig])],
  providers: [PublisherService],
  controllers: [WorldStateController],
})
export class PublisherModule {}
