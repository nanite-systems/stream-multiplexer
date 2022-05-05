import { PS2Event } from '@census-reworked/stream-types';

const event: PS2Event = {
  amount: '100',
  character_id: '123',
  event_name: 'GainExperience',
  experience_id: '123',
  loadout_id: '123',
  other_id: '123',
  timestamp: Date.now().toString(),
  world_id: '17',
  zone_id: '2',
} as PS2Event;

console.time('test1');

for (let i = 0; i < 100000; i++) {
  if (event.event_name == 'AchievementEarned') '';
  else if (event.event_name == 'BattleRankUp') '';
  else if (event.event_name == 'Death') '';
  else if (event.event_name == 'ItemAdded') '';
  else if (event.event_name == 'PlayerFacilityCapture') '';
  else if (event.event_name == 'PlayerFacilityDefend') '';
  else if (event.event_name == 'PlayerLogin') '';
  else if (event.event_name == 'PlayerLogout') '';
  else if (event.event_name == 'SkillAdded') '';
  else if (event.event_name == 'VehicleDestroy') '';
  else if (event.event_name == 'ContinentLock') '';
  else if (event.event_name == 'ContinentUnlock') '';
  else if (event.event_name == 'FacilityControl') '';
  else if (event.event_name == 'GainExperience')
    `${event.amount}:${event.character_id}:${event.event_name}:${event.experience_id}:${event.loadout_id}:${event.other_id}:${event.timestamp}:${event.world_id}:${event.zone_id}`;
  else '';
}

console.timeEnd('test1');

console.time('test2');

for (let i = 0; i < 100000; i++) {
  Object.values(event).join(':');
}

console.timeEnd('test2');

console.time('test3');

for (let i = 0; i < 100000; i++) {
  let hash = '';

  for (const key in event as any) hash += `:${event[key]}`;

  hash.slice(1);
}

console.timeEnd('test3');
