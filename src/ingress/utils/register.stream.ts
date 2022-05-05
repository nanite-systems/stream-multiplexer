import { InjectionToken, Provider } from '@nestjs/common';
import { StreamFactory } from '../factories/stream.factory';

export function registerStream(
  token: InjectionToken,
  channel: string,
): Provider {
  return {
    provide: token,
    useFactory: (factory: StreamFactory) => factory.create(channel),
    inject: [StreamFactory],
  };
}
