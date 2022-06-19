import { Module } from '@nestjs/common';
import { ConfigModule } from '@census-reworked/nestjs-utils';
import { AppConfig } from './app.config';
import { IngressModule } from './ingress/ingress.module';
import { WorldTrackerModule } from './world-tracker/world-tracker.module';

@Module({
  imports: [
    ConfigModule.forFeature([AppConfig]),
    IngressModule,
    WorldTrackerModule,
  ],
})
export class AppModule {}
