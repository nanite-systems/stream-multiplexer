import { Module } from '@nestjs/common';
import { ConfigModule } from '@census-reworked/nestjs-utils';
import { AppConfig } from './app.config';
import { IngressModule } from './ingress/ingress.module';

@Module({
  imports: [ConfigModule.forFeature([AppConfig]), IngressModule],
})
export class AppModule {}
