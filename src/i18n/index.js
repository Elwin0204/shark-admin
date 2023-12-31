import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { getLocalLangConfig } from './local'

// element-ui built-in lang
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementTwLocale from 'element-ui/lib/locale/lang/zh-TW'

// local lang
import enLocale from './lang/en'
import zhLocale from './lang/zh-CN'
import twLocale from './lang/zh-TW'

Vue.use(VueI18n)

const defaultLang = 'zh_CN'

export const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh_CN: {
    ...zhLocale,
    ...elementZhLocale,
  },
  zh_TW: {
    ...twLocale,
    ...elementTwLocale,
  },
}

export const getLocale = () => {
  const locales = Object.keys(messages)
  // local storage lang
  const localConfig = getLocalLangConfig()
  const { language_default_locale } = localConfig || {}
  if (language_default_locale) {
    for (const locale of locales) {
      if (language_default_locale.indexOf(locale) > -1) {
        document.documentElement.lang = locale
        return locale
      }
    }
  }

  // browser lang
  const language = navigator.language.toLowerCase().replace('-', '_')
  for (const locale of locales) {
    if (language.indexOf(locale.toLowerCase()) > -1) {
      document.documentElement.lang = locale
      return locale
    }
  }

  // Default language is zh_CN
  return defaultLang
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages,
  silentTranslationWarn: true,
})

export const setLocale = (lang) => {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function i18nRender(key) {
  return i18n.t(`${key}`)
}

export default i18n
