import { IsUrl } from 'class-validator';
import { ProcessEnv } from '@census-reworked/nestjs-utils';

export class RedisConfig {
  @ProcessEnv('REDIS_URL')
  @IsUrl({ protocols: ['redis'] })
  url = 'redis://localhost:27017';
}
