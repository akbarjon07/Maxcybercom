import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./translations/en.json";
import ru from "./translations/ru.json";
import uz from "./translations/uz.json";

const resources = {
  uz,
  ru,
  en
}
export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next)
  .init({
    resources,
    lng: window.localStorage.lang,
    defaultNS: "common",
    fallbackLng: "ru",
  });