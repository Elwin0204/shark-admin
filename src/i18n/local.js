import { langConfigKey, langDataKey } from '@/config'

function setLocalStorage(key, value) {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

function getLocalStorage(key) {
  if (!key) return
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

export function getLocalLangConfig() {
  return getLocalStorage(langConfigKey)
}

export function setLocalLangConfig(value) {
  return setLocalStorage(langConfigKey, value)
}

export function getLocalLangData() {
  return getLocalStorage(langDataKey)
}

export function setLocalLangData(value) {
  return setLocalStorage(langDataKey, value)
}

export function getLang() {
  const localLangConfig = getLocalLangConfig()
  const lang = localLangConfig && localLangConfig.language_default_locale
  return lang || ''
}
