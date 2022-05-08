import { FactoryProvider, Type } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export function configProvider(config: Type): FactoryProvider {
  return {
    provide: config,
    useFactory: async () => {
      const instance = plainToClass(config, {});

      // TODO: Better error logging
      await validateOrReject(instance);

      return instance;
    },
  };
}
