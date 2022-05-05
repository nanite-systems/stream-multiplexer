import { Injectable } from '@nestjs/common';
import { EventMessage } from '../../ingress/concerns/stream-messages.types';
import { PS2Event } from '@census-reworked/stream-types';

export interface HashedEventMessage extends EventMessage {
  hash: string;
}

@Injectable()
export class HashPayloadPipe {
  handle(event: EventMessage): HashedEventMessage {
    return {
      ...event,
      hash: this.createHash(event.payload),
    };
  }

  private createHash(payload: PS2Event): string {
    let hash = '';

    for (const key in payload) hash += `:${payload[key]}`;

    return hash.slice(1);
  }
}
