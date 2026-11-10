export { en } from './en';
export { id } from './id';
export { ja } from './ja';
export type { Content } from './types';

import { en } from './en';
import { id } from './id';
import { ja } from './ja';
import type { Content } from './types';

export const languages = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'ja', label: 'JP', flag: '🇯🇵' },
] as const;

export type LangCode = typeof languages[number]['code'];

export function getContent(lang: LangCode): Content {
  const map: Record<LangCode, Content> = { en, id, ja };
  return map[lang];
}
