import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationEL from './locales/gr.json';

const resources = {
  en: {
    translation: translationEN,
  },
  el: {
    translation: translationEL,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // initial language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
