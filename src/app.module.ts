import { Module } from '@nestjs/common';
import { IngressModule } from './ingress/ingress.module';
import { EventProcessorModule } from './event-processor/event-processor.module';
import { PublisherModule } from './publisher/publisher.module';
import { ConfigModule } from '@census-reworked/nestjs-utils';
import { AppConfig } from './app.config';

@Module({
  imports: [
    ConfigModule.forFeature([AppConfig]),
    IngressModule,
    EventProcessorModule,
    PublisherModule,
  ],
})
export class AppModule {}
