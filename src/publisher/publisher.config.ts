import { IsNotEmpty } from 'class-validator';
import { ProcessEnv } from '@census-reworked/nestjs-utils';

export class PublisherConfig {
  @ProcessEnv('PUBLISH_EVENT_CHANNEL')
  @IsNotEmpty()
  eventStream = 'ps2-events';

  @ProcessEnv('PUBLISH_WORLD_STATE_CHANNEL')
  @IsNotEmpty()
  worldStateStream = 'ps2-worlds';
}
