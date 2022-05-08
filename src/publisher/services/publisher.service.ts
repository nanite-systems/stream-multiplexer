import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EVENTS_PROCESSED,
  WORLD_STATE_PROCESSED,
} from '../../processor/constants';
import { Observable } from 'rxjs';
import { PublisherConfig } from '../publisher.config';
import { REDIS_PUBLISH } from '../../redis/constants';
import Redis from 'ioredis';

@Injectable()
export class PublisherService implements OnApplicationBootstrap {
  constructor(
    @Inject(REDIS_PUBLISH)
    private readonly redis: Redis,
    private readonly config: PublisherConfig,
    @Inject(EVENTS_PROCESSED)
    private readonly eventStream: Observable<any>,
    @Inject(WORLD_STATE_PROCESSED)
    private readonly worldStateStream: Observable<any>,
  ) {}

  onApplicationBootstrap(): void {
    this.eventStream.subscribe((event) => {
      this.redis.publish(this.config.eventStream, JSON.stringify(event));
    });

    this.worldStateStream.subscribe((worldState) => {
      this.redis.publish(
        this.config.worldStateStream,
        JSON.stringify(worldState),
      );
    });
  }
}
