import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import koTranslation from '../locale/ko/koTranslation.json'
import enTranslation from '../locale/en/enTranslation.json'

import 'dayjs/locale/en';
import 'dayjs/locale/ko';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources: {
            ko: {
                translation: koTranslation
            },
            en: {
                translation: enTranslation
            },
            fallbackLng: 'ko',
            interpolation: {
                escapeValue: false
            }
        }
    }).then()


export default i18n;