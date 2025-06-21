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
    fallbackLng: 'en',
    supportedLngs: ['en', 'ua', 'de'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;