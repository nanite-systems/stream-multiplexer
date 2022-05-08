import { Module } from '@nestjs/common';
import { IngressModule } from '../ingress/ingress.module';
import { EventService } from './services/event.service';
import { WorldStateService } from './services/world-state.service';
import { CombineStreamPipe } from './pipes/combine-stream.pipe';
import { DuplicateFilterPipe } from './pipes/duplicate-filter.pipe';
import { HashPayloadPipe } from './pipes/hash-payload.pipe';
import { Subject } from 'rxjs';
import { WorldTracker } from './trackers/world.tracker';
import { EVENTS_PROCESSED, WORLD_STATE_PROCESSED } from './constants';

@Module({
  imports: [IngressModule],
  providers: [
    CombineStreamPipe,
    DuplicateFilterPipe,
    HashPayloadPipe,

    WorldTracker,

    EventService,
    WorldStateService,

    {
      provide: EVENTS_PROCESSED,
      useFactory: () => new Subject(),
    },
    {
      provide: WORLD_STATE_PROCESSED,
      useFactory: () => new Subject(),
    },
  ],
  exports: [WorldTracker, EVENTS_PROCESSED, WORLD_STATE_PROCESSED],
})
export class ProcessorModule {}
