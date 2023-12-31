import auth from './auth'

const install = function (Vue) {
  Vue.directive('has', auth)
}

if (window.Vue) {
  window['auth'] = auth
  Vue.use(install)
}

auth.install = install
export default auth
