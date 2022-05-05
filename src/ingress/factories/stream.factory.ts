import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Subject } from 'rxjs';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class StreamFactory implements OnModuleInit {
  private readonly logger = new Logger('RedisStream');

  private readonly streams = new Map<string, Subject<any>>();

  constructor(@InjectRedis() private readonly redis: Redis) {}

  onModuleInit(): void {
    this.redis.on('message', (channel, message) => {
      try {
        this.streams.get('channel')?.next(JSON.stringify(message));
      } catch (err) {
        if (err instanceof SyntaxError)
          this.logger.warn(
            `Received malformed message in ${channel}: ${message}`,
          );
        else throw err;
      }
    });
  }

  async create<T = any>(channel: string): Promise<Subject<T>> {
    let subject = this.streams.get(channel);

    if (!subject) {
      await this.redis.subscribe(channel);

      subject = new Subject();

      this.streams.set(channel, subject);
    }

    return subject;
  }
}
