import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { WORLD_STATE_INGRESS } from '../../ingress/constants';
import { Observable, Subject } from 'rxjs';
import { WorldStateMessage } from '../../ingress/concerns/stream-messages.types';
import { WorldTracker } from '../trackers/world.tracker';
import { WORLD_STATE_PROCESSED } from '../constants';
import { WorldState } from '../concerns/world-state';

@Injectable()
export class WorldStateService implements OnApplicationBootstrap {
  constructor(
    @Inject(WORLD_STATE_INGRESS)
    private readonly worldIngress: Observable<WorldStateMessage>,
    private readonly worldTracker: WorldTracker,
    @Inject(WORLD_STATE_PROCESSED)
    private readonly worldPublish: Subject<WorldState>,
  ) {}

  onApplicationBootstrap(): void {
    this.worldIngress.subscribe((worldState) => {
      const { worldId, state, detail } = worldState;
      if (this.worldTracker.register({ worldId, state, detail }))
        this.worldPublish.next({ worldId, state, detail });
    });
  }
}
