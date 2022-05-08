import { IsNotEmpty, IsString } from 'class-validator';

export class PublisherConfig {
  @IsString()
  @IsNotEmpty()
  eventStream = process.env.PUBLISH_EVENT_CHANNEL;

  @IsString()
  @IsNotEmpty()
  worldStateStream = process.env.PUBLISH_WORLD_STATE_CHANNEL;
}
