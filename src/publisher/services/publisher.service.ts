import { Injectable } from '@nestjs/common';
import { PublisherConfig } from '../publisher.config';
import IORedis from 'ioredis';
import { Stream } from 'ps2census';
import { WorldState } from '../../world-tracker/concerns/world-state';

@Injectable()
export class PublisherService {
  constructor(
    private readonly redis: IORedis,
    private readonly config: PublisherConfig,
  ) {}

  async publishEvent(event: Stream.PS2Event): Promise<void> {
    await this.redis.publish(this.config.eventStream, JSON.stringify(event));
  }

  async publishWorldState(worldState: WorldState): Promise<void> {
    await this.redis.publish(
      this.config.worldStateStream,
      JSON.stringify(worldState),
    );
  }
}
