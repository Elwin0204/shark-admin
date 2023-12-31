import Vue from 'vue'
import localForage from 'localforage'
Vue.prototype.$forage = localForage

export function initDB() {
  const dbInstance = localForage.createInstance({
    name: 'SK',
  })
  if (!Window.$dbInstance) {
    Window.$dbInstance = dbInstance
  }
}

export function getDBInstance() {
  if (!Window.$dbInstance) {
    initDB()
  }
  return Window.$dbInstance
}
