import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import headerEs from './locales/es/header.json'
import headerEn from './locales/en/header.json'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      header: headerEs
    },
    en: {
      header: headerEn
    }
  },
  lng: 'es',
  fallbackLng: 'en',
  ns: ['header'],
  defaultNS: 'header',
  interpolation: {
    escapeValue: false
  }
})
