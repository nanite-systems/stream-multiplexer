import { ProcessEnv } from '@census-reworked/nestjs-utils';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class RabbitMqConfig {
  @ProcessEnv('RMQ_URL')
  @IsUrl({ protocols: ['amqp'] })
  url = 'amqp://localhost';

  @ProcessEnv('RMQ_INGRESS_QUEUE')
  @IsNotEmpty()
  ingressExchange: string;

  @ProcessEnv('RMQ_PUBLISH_QUEUE')
  @IsNotEmpty()
  publishExchange: string;
}
