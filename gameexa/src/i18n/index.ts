import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.translation.json';
import ua from './locales/ua.translation.json';
import de from './locales/de.translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
      de: { translation: de },
    },
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ua', 'de'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

console.log('i18n initialized with languages:', i18n.languages);
console.log('Current language:', i18n.language);

export default i18n;