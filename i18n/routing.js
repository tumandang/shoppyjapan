import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ms', 'ja','id'],
  defaultLocale: 'en',
  localePrefix: 'always'
});