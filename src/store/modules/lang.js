/**
 * @author Elwin
 * @description 国际化
 */

import Vue from 'vue'
import {
  getLocalLangConfig,
  setLocalLangConfig,
  getLocalLangData,
  setLocalLangData,
  getLang,
} from '@/i18n/local'
import { messages, getLocale, setLocale } from '@/i18n'
import i18n from '@/i18n'
import { langConfig, langData } from '@/api/lang'
import $baseEventBus from '@/utils/bus'

const state = () => ({
  lang: getLang(),
  langConfig: getLocalLangConfig(),
})
const getters = {
  langConfig: (state) => state.langConfig,
  lang: (state) => state.lang,
}
const mutations = {
  setLangConfig(state, langConfig) {
    state.langConfig = langConfig
    setLocalLangConfig(langConfig)
  },
  setLang(state, lang) {
    state.lang = lang
  },
}
const actions = {
  async loadLangAsync({ commit }) {
    let resLangConfig = await langConfig({})
    resLangConfig = resLangConfig.data || {}
    const langVersion = resLangConfig.language_version
    const localConfig = getLocalLangConfig()
    const { language_default_locale, language_version } = localConfig || {}
    if (language_default_locale && language_version === langVersion) {
      const localData = getLocalLangData()
      const mergedLangData = {
        ...localData,
        ...messages[language_default_locale],
      }
      i18n.setLocaleMessage(language_default_locale, mergedLangData)
    } else {
      const localLang = getLocale()
      resLangConfig.language_default_locale = localLang
      commit('setLangConfig', resLangConfig)
      setLocale(localLang)
      const resLangData = await langData({
        locale_code: localLang,
        lan_type: ['common'],
      })
      const mergedLangData = {
        ...resLangData.language_json,
        ...messages[localLang],
      }
      setLocalLangData(mergedLangData)
      i18n.setLocaleMessage(localLang, mergedLangData)
    }
  },
  async switchLangAsync({ commit }, lang) {
    let resLangConfig = await langConfig({})
    resLangConfig = resLangConfig.data || {}
    resLangConfig.language_default_locale = lang
    setLocale(lang)
    commit('setLang', lang)
    commit('setLangConfig', resLangConfig)
    const resLangData = await langData({
      locale_code: lang,
      lan_type: ['common'],
    })
    const mergedLangData = {
      ...resLangData.language_json,
      ...messages[lang],
    }
    setLocalLangData(mergedLangData)
    i18n.setLocaleMessage(lang, mergedLangData)
    $baseEventBus.$emit('langChange')
    Vue.prototype.$baseMessage(`切换语言成功`, 'success')
  },
}
export default { state, getters, mutations, actions }
