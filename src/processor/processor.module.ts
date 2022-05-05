import { Module } from '@nestjs/common';
import { IngressModule } from '../ingress/ingress.module';
import { EventService } from './services/event.service';
import { WorldStateService } from './services/world-state.service';
import { CombineStreamPipe } from './pipes/combine-stream.pipe';
import { DuplicateFilterPipe } from './pipes/duplicate-filter.pipe';
import { HashPayloadPipe } from './pipes/hash-payload.pipe';

@Module({
  imports: [IngressModule],
  providers: [
    CombineStreamPipe,
    DuplicateFilterPipe,
    HashPayloadPipe,

    EventService,
    WorldStateService,
  ],
})
export class ProcessorModule {}
