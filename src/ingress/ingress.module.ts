import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { IngressConfig } from './ingress.config';
import { ConfigModule } from '@census-reworked/nestjs-utils';
import { IngressService } from './services/ingress.service';

@Module({
  imports: [ConfigModule.forFeature([IngressConfig]), RedisModule],
  providers: [IngressService],
  exports: [IngressService],
})
export class IngressModule {}
