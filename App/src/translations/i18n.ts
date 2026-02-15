import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations directly (Vite-compatible)
import frTranslation from "./locales/fr/translation.json";
import enTranslation from "./locales/en/translation.json";

// Clé pour stocker la langue dans localStorage
const localStorageLanguageKey = "user-preferred-language";

// Ressources de traduction
const resources = {
  fr: { translation: frTranslation },
  en: { translation: enTranslation },
};

// Récupérer la langue préférée stockée dans localStorage (ou 'fr' par défaut)
const savedLanguage = localStorage.getItem(localStorageLanguageKey) || "fr";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Utiliser la langue sauvegardée ou "fr" par défaut
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false, // React already safes from XSS
  },
});

/**
 * Fonction utilitaire pour changer la langue et sauvegarder la préférence
 * @param {string} language La langue à sélectionner
 */
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  localStorage.setItem(localStorageLanguageKey, language); // Sauvegarde la langue dans localStorage
};

/**
 * Fonction utilitaire pour récupérer la langue actuelle
 * @returns {string} La langue actuelle (e.g., 'fr', 'en')
 */
export const getCurrentLanguage = (): string => {
  return i18n.language;
};

/**
 * Fonction utilitaire pour récupérer toutes les langues disponibles
 * @returns {string[]} Un tableau de codes de langues disponibles (e.g., ['fr', 'en'])
 */
export const getAvailableLanguages = (): string[] => {
  return Object.keys(i18n.options.resources || {});
};

export default i18n;
