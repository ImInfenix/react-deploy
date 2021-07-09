import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

import { TRANSLATIONS_EN } from "./translations/en";
import { TRANSLATIONS_FR } from "./translations/fr";

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],

    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
