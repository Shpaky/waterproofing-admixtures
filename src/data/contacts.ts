import type { Locale } from '@/i18n';

/**
 * Company data. This site carries no contact details of its own: every contact link
 * leads to the operator's hub site (Rai Family Corp), contacts section, in the same locale.
 */
export const contacts = {
  company: 'RAI FAMILY CORP LLP',
  legalName: 'RAI FAMILY CORP LLP',
  email: 'raigroupholding@gmail.com', // not rendered on the site; kept for structured data only
  parentSite: 'https://shpaky.github.io/rai-family-corp/',
  parentContactsHash: '#contacts',
} as const;

/** Locale-matched URL of the hub site; `hash` selects a section, e.g. '#contacts'. */
export function parentUrl(locale: Locale, hash = ''): string {
  const prefix = locale === 'en' ? '' : `${locale}/`;
  return `${contacts.parentSite}${prefix}${hash}`;
}

export const contactsUrl = (locale: Locale) => parentUrl(locale, contacts.parentContactsHash);
