import { Injectable } from '@nestjs/common';
import { EventMessage } from '../concerns/stream-messages.types';

@Injectable()
export class IngressService {
  register(callback: (event: EventMessage) => Promise<void> | void): void {}
}
