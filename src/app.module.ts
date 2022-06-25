import { Module } from '@nestjs/common';
import { IngressModule } from './ingress/ingress.module';
import { WorldTrackerModule } from './world-tracker/world-tracker.module';

@Module({
  imports: [IngressModule, WorldTrackerModule],
})
export class AppModule {}
