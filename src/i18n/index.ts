import { en } from './en';
import { ru } from './ru';
import { hi } from './hi';

export type Locale = 'en' | 'ru' | 'hi';
export type Dictionary = {
  [K in keyof typeof en]: { [P in keyof (typeof en)[K]]: string };
};

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
