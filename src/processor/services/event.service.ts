import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EVENT_STREAM } from '../../ingress/constants';
import { filter, map, Observable } from 'rxjs';
import { EventMessage } from '../../ingress/concerns/stream-messages.types';
import { CombineStreamPipe } from '../pipes/combine-stream.pipe';
import { DuplicateFilterPipe } from '../pipes/duplicate-filter.pipe';
import { HashPayloadPipe } from '../pipes/hash-payload.pipe';

@Injectable()
export class EventService implements OnApplicationBootstrap {
  constructor(
    @Inject(EVENT_STREAM)
    private readonly eventStream: Observable<EventMessage>,
    private readonly combineStreamPipe: CombineStreamPipe,
    private readonly duplicateFilterPipe: DuplicateFilterPipe,
    private readonly hashPayloadPipe: HashPayloadPipe,
  ) {}

  onApplicationBootstrap(): void {
    this.eventStream
      .pipe(
        map((event) => this.hashPayloadPipe.handle(event)),
        filter((event) => this.duplicateFilterPipe.handle(event)),
        filter((event) => this.combineStreamPipe.handle(event)),
        map((event) => event.payload),
      )
      .subscribe((event) => {
        // Publish
      });
  }
}
