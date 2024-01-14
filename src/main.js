import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './plugins'
import i18n from '@/i18n'
import { isMock } from '@/config'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

if (isMock || process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('@/utils/static')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  el: '#shark-admin',
  router,
  store,
  i18n,
  render: (h) => h(App),
})
// 调试js移入样式
// setTimeout(() => {
//   debugger
// }, 3000)
