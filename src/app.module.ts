import { Module } from '@nestjs/common';
import { IngressModule } from './ingress/ingress.module';
import { ProcessorModule } from './processor/processor.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [IngressModule, ProcessorModule, PublisherModule],
})
export class AppModule {}
