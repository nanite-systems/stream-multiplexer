import { ProcessEnv } from '@census-reworked/nestjs-utils';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class RabbitMqConfig {
  @ProcessEnv('RMQ_URL')
  @IsUrl({ protocols: ['amqp'] })
  url = 'amqp://localhost';

  @ProcessEnv('RMQ_INGRESS_EXCHANGE')
  @IsNotEmpty()
  ingressExchange: string;

  @ProcessEnv('RMQ_PUBLISH_EXCHANGE')
  @IsNotEmpty()
  publishExchange: string;
}
