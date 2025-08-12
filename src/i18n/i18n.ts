import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем наши файлы с переводами
import translationRU from '../i18n/locales/ru/translation.json';
import translationEN from '../i18n/locales/en/translation.json';
import translationEN_AU from '../i18n/locales/en/en-AU/translation.json';
import translationDE from '../i18n/locales/de/translation.json';
import translationFR from '../i18n/locales/fr/translation.json';
import translationES from '../i18n/locales/es/translation.json';
import translationIT from '../i18n/locales/it/translation.json';
import translationZH from '../i18n/locales/zh/cn/translation.json';
import translationJA from '../i18n/locales/ja/translation.json';
import translationPT_BR from '../i18n/locales/pt/br/translation.json';


export const resources = {
    ru: { translation: translationRU },
    en: { translation: translationEN },
    'en-AU': { translation: translationEN_AU },
    de: { translation: translationDE },
    fr: { translation: translationFR },
    es: { translation: translationES },
    it: { translation: translationIT },
    'zh-CN': { translation: translationZH },
    ja: { translation: translationJA },
    'pt-BR': { translation: translationPT_BR },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;