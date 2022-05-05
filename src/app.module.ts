import { Module } from '@nestjs/common';
import { IngressModule } from './ingress/ingress.module';

@Module({
  imports: [IngressModule],
})
export class AppModule {}
