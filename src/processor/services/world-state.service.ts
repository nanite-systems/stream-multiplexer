import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { WORLD_CHANGE_STREAM } from '../../ingress/constants';
import { Observable } from 'rxjs';
import { WorldStateMessage } from '../../ingress/concerns/stream-messages.types';

@Injectable()
export class WorldStateService implements OnApplicationBootstrap {
  constructor(
    @Inject(WORLD_CHANGE_STREAM)
    private readonly worldStream: Observable<WorldStateMessage>,
  ) {}

  onApplicationBootstrap(): void {
    this.worldStream.subscribe((worldState) => {
      // Track world
    });
  }
}
