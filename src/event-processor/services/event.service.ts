import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CombineStreamPipe } from '../pipes/combine-stream.pipe';
import { DuplicateFilterPipe } from '../pipes/duplicate-filter.pipe';
import { HashPayloadPipe } from '../pipes/hash-payload.pipe';
import { IngressService } from '../../ingress/services/ingress.service';
import { PublisherService } from '../../publisher/services/publisher.service';

@Injectable()
export class EventService implements OnApplicationBootstrap {
  constructor(
    private readonly ingressService: IngressService,
    private readonly combineStreamPipe: CombineStreamPipe,
    private readonly duplicateFilterPipe: DuplicateFilterPipe,
    private readonly hashPayloadPipe: HashPayloadPipe,
    private readonly publisherService: PublisherService,
  ) {}

  onApplicationBootstrap(): void {
    this.ingressService.register((event) => {
      const hashedEvent = this.hashPayloadPipe.handle(event);

      if (!this.duplicateFilterPipe.handle(hashedEvent)) return;
      if (!this.combineStreamPipe.handle(hashedEvent)) return;

      void this.publisherService.publishEvent(event.payload);
    });
  }
}
