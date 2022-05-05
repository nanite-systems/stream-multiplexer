import { PS2Event, PS2EventNames } from '@census-reworked/stream-types';

export interface EventMessage {
  collector: string;
  environment: string;
  worldId: string;
  eventName: PS2EventNames;
  payload: PS2Event;
}

export interface WorldStateMessage {
  collector: string;
  environment: string;
  worldId: string;
  detail: string;
  state: boolean;
}
