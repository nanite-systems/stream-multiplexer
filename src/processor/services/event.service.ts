import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EVENT_INGRESS } from '../../ingress/constants';
import { filter, map, Observable, Subject } from 'rxjs';
import { EventMessage } from '../../ingress/concerns/stream-messages.types';
import { CombineStreamPipe } from '../pipes/combine-stream.pipe';
import { DuplicateFilterPipe } from '../pipes/duplicate-filter.pipe';
import { HashPayloadPipe } from '../pipes/hash-payload.pipe';
import { EVENTS_PROCESSED } from '../constants';

@Injectable()
export class EventService implements OnApplicationBootstrap {
  constructor(
    @Inject(EVENT_INGRESS)
    private readonly eventIngress: Observable<EventMessage>,
    @Inject(EVENTS_PROCESSED)
    private readonly eventPublish: Subject<any>,
    private readonly combineStreamPipe: CombineStreamPipe,
    private readonly duplicateFilterPipe: DuplicateFilterPipe,
    private readonly hashPayloadPipe: HashPayloadPipe,
  ) {}

  onApplicationBootstrap(): void {
    this.eventIngress
      .pipe(
        map((event) => this.hashPayloadPipe.handle(event)),
        filter((event) => this.duplicateFilterPipe.handle(event)),
        filter((event) => this.combineStreamPipe.handle(event)),
        map((event) => event.payload),
      )
      .subscribe((event) => {
        this.eventPublish.next(event);
      });
  }
}
