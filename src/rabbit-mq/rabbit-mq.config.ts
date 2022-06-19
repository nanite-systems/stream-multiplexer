import { ProcessEnv } from '@census-reworked/nestjs-utils';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class RabbitMqConfig {
  @ProcessEnv('RABBITMQ_URL')
  @IsUrl({ protocols: ['amqp'], require_tld: false })
  url = 'amqp://localhost';

  @ProcessEnv('RABBITMQ_INGRESS_EXCHANGE')
  @IsNotEmpty()
  ingressExchange: string;

  @ProcessEnv('RABBITMQ_PUBLISH_EXCHANGE')
  @IsNotEmpty()
  publishExchange: string;
}
