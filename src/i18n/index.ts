import { en } from './en';
import { ru } from './ru';
import { hi } from './hi';

export type Locale = 'en' | 'ru' | 'hi';
/** Same shape as `en`; literal strings widen to `string`, arrays keep their item shape. */
type Shape<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Shape<U>[]
    : { [K in keyof T]: Shape<T[K]> };
export type Dictionary = Shape<typeof en>;

export const locales: Locale[] = ['en', 'ru', 'hi'];
export const defaultLocale: Locale = 'en';
export const localeNames: Record<Locale, string> = { en: 'English', ru: 'Русский', hi: 'हिन्दी' };
export const dictionaries: Record<Locale, Dictionary> = { en, ru, hi };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Path to the locale root, base-aware, always with trailing slash. */
export function localePath(locale: Locale, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${base}${prefix}/${clean ? `${clean}/` : ''}`;
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
