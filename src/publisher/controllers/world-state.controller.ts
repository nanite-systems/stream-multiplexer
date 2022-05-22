import { Controller, Get } from '@nestjs/common';
import { WorldTracker } from '../../world-tracker/trackers/world.tracker';

@Controller('/worlds')
export class WorldStateController {
  constructor(private readonly worldTracker: WorldTracker) {}

  @Get()
  list() {
    return this.worldTracker.toArray();
  }
}
