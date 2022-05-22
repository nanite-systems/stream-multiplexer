import { Module } from '@nestjs/common';
import { IngressModule } from '../ingress/ingress.module';
import { EventService } from './services/event.service';
import { CombineStreamPipe } from './pipes/combine-stream.pipe';
import { DuplicateFilterPipe } from './pipes/duplicate-filter.pipe';
import { HashPayloadPipe } from './pipes/hash-payload.pipe';
import { PublisherModule } from '../publisher/publisher.module';

@Module({
  imports: [IngressModule, PublisherModule],
  providers: [
    CombineStreamPipe,
    DuplicateFilterPipe,
    HashPayloadPipe,

    EventService,
  ],
})
export class EventProcessorModule {}
