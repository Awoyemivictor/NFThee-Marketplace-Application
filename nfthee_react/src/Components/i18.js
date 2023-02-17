import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
 

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en','fr','ger','cn','span','portu','jpn','arabic','dutch'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['cookie', 'path', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
      wait: true,
      useSuspense: true
    }
  })


export default i18next;