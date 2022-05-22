import { Module } from '@nestjs/common';
import { CensusModule } from '../census/census.module';
import { WorldStateController } from './controllers/world-state.controller';
import { WorldStateService } from './services/world-state.service';
import { PublisherModule } from '../publisher/publisher.module';

@Module({
  imports: [CensusModule, PublisherModule],
  providers: [WorldStateService],
  controllers: [WorldStateController],
})
export class WorldTrackerModule {}
