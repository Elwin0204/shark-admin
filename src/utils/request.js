import Vue from 'vue'
import axios from 'axios'
import {
  baseURL,
  contentType,
  debounce,
  invalidCode,
  noPermissionCode,
  noFoundCode,
  requestTimeout,
  successCode,
  tokenName,
  loginInterception,
} from '@/config'
import store from '@/store'
import qs from 'qs'
import router from '@/router'
import { isArray } from '@/utils/validate'

let loadingInstance

/**
 * @author Elwin
 * @description 处理code异常
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
  switch (code) {
    // 402: 未登录或token过期， 清除token
    case invalidCode:
      Vue.prototype.$baseMessage(msg || `后端接口${code}异常`, 'error')
      store.dispatch('user/resetAccessToken').catch(() => {})
      if (loginInterception) {
        location.reload()
      }
      break
    // 401: 无权限访问
    case noPermissionCode:
      router.push({ path: '/401' }).catch(() => {})
      break
    // 404: 请求的资源不存在
    case noFoundCode:
      Vue.prototype.$baseMessage(msg || `${code}：后端接口不存在`, 'error')
      break
    default:
      Vue.prototype.$baseMessage(msg || `${code}：后端接口异常`, 'error')
      break
  }
}

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
})

instance.interceptors.request.use(
  (config) => {
    // fix: 没有参数时新增不上Content-Type
    if (!config.data) {
      config.data = true
    }
    if (store.getters['user/accessToken']) {
      config.headers[tokenName] = store.getters['user/accessToken']
    }
    //这里会过滤所有为空、0、false的key，如果不需要请自行注释
    if (config.data)
      config.data = Vue.prototype.$baseLodash.pickBy(
        config.data,
        Vue.prototype.$baseLodash.identity
      )
    if (
      config.data &&
      config.headers['Content-Type'] ===
        'application/x-www-form-urlencoded;charset=UTF-8'
    )
      config.data = qs.stringify(config.data)
    // if (debounce.some((item) => config.url.includes(item)))
    loadingInstance = Vue.prototype.$baseLoading()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    if (loadingInstance) loadingInstance.close()

    const { data, config } = response
    const { code, msg } = data
    // 操作正常Code数组
    const codeVerificationArray = isArray(successCode)
      ? [...successCode]
      : [...[successCode]]
    // 是否操作正常
    if (codeVerificationArray.includes(code)) {
      return data
    } else {
      handleCode(code, msg)
      return Promise.reject(
        'shark-admin请求异常拦截:' +
          JSON.stringify({ url: config.url, code, msg }) || 'Error'
      )
    }
  },
  (error) => {
    if (loadingInstance) loadingInstance.close()
    const { response, message } = error
    // 请求已发出, 但不在2xx范围
    if (error.response && error.response.data) {
      const { status, data } = response
      handleCode(status, data.msg || message)
      return Promise.reject(error)
    } else {
      // 处理断网的情况
      // eg: 请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        store.dispatch('settings/changeNetwork', false).catch(() => {})
      } else {
        let { message } = error
        if (message === 'Network Error') {
          message = '后端接口连接异常'
        }
        if (message.includes('timeout')) {
          message = '后端接口请求超时'
        }
        if (message.includes('Request failed with status code')) {
          const code = message.substr(message.length - 3)
          message = '后端接口' + code + '异常'
        }
        Vue.prototype.$baseMessage(message || `后端接口未知异常`, 'error')
        return Promise.reject(error)
      }
    }
  }
)

export default instance
