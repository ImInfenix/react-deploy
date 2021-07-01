import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

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
        translation: {
          home_hello: "Hi ! I'm Duncan.",
        },
      },
      fr: {
        translation: {
          home_hello: "Bonjour ! Je suis Duncan.",
        },
      },
    },
    // ns: ["common"],
    // defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    debug: false,
  });

export default i18n;
