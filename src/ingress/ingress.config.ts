import { IsNotEmpty, IsString } from 'class-validator';

export class IngressConfig {
  @IsString()
  @IsNotEmpty()
  eventChannel = process.env.INGRESS_EVENT_CHANNEL;

  @IsString()
  @IsNotEmpty()
  worldStateChannel = process.env.INGRESS_WORLD_STATE_CHANNEL;
}
