import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nHttpBackend from 'i18next-http-backend';
import Backend from 'i18next-http-backend';

type TSetupI18n = Record<'fallbackLng' | 'path', string>;

export function setupI18n({ fallbackLng, path }: TSetupI18n) {
  i18n
    .use(i18nHttpBackend)
    .use(Backend)
    .use(LanguageDetector)
    .init({
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      fallbackLng: fallbackLng,
      detection: {
        order: ['localStorage', 'cookie', 'htmlTag', 'navigator', 'path'],
        caches: ['localStorage', 'cookie'],
      },
      backend: {
        crossDomain: false,
        loadPath: path,
        requestOptions: {
          cache: 'no-store',
        },
        ns: ['buttons', 'form', 'authPages', 'sidebar', 'common', 'table', 'appointment', 'clinic', 'specializations'],
      },
    });

  return i18n;
}
