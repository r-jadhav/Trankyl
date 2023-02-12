import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import translationEN from "./translationEN.json";
import translationFN from "./translationFN.json";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {
  en: {
    translation: translationEN,
  },

  fr: {
    translation: translationFN,
  },
};

i18next

  .use(initReactI18next)

  .init({
    resources,

    lng: "fr",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
