import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ms', 'ja'],
  defaultLocale: 'en',
  localePrefix: 'always'
});