import { Module } from '@nestjs/common';
import { CensusModule } from '../census/census.module';
import { FetchRecentCharactersDto } from './dtos/fetch-recent-characters.dto';

@Module({
  imports: [CensusModule],
  controllers: [FetchRecentCharactersDto],
})
export class RecentCharactersModule {}
