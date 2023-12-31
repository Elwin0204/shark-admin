const defaultLangConfig = {
  language_default_locale: 'zh_CN',
  language_locales: 'zh_TW,zh_CN,vi',
  language_version: '20230911095059'
}
const defaultLangData = {
  en: {
    test: 'TEST'
  },
  zh_CN: {
    test: '测试'
  },
  zh_TW: {
    test: '測試'
  }
}
module.exports = [
  {
    url: '/lang/langConfig',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: defaultLangConfig,
      }
    }
  },
  {
    url: '/lang/langData',
    type: 'get',
    response(config) {
      const { locale_code } = config.query
      return {
        code: 200,
        msg: 'success',
        data: defaultLangData[locale_code],
      }
    }
  }
]
