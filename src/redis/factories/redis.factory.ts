import { Injectable, Logger } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisFactory {
  create(url: string, name: string): Redis {
    const instance = new Redis(url);
    const logger = new Logger(name);

    instance.on('error', (err) => logger.error(err));

    return instance;
  }
}
