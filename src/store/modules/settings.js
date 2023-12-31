/**
 * @author Elwin
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */

import defaultSettings from '@/config'

const { tabsBar, logo, layout, header, themeBar, themeName } = defaultSettings
const theme = JSON.parse(localStorage.getItem('theme')) || {}

const state = () => ({
  tabsBar: theme.tabsBar || tabsBar,
  logo,
  collapse: false,
  layout: theme.layout || layout,
  header: theme.header || header,
  device: 'desktop',
  themeBar,
  theme: theme.name || themeName,
  hasNetwork: true,
})
const getters = {
  collapse: (state) => state.collapse,
  device: (state) => state.device,
  header: (state) => state.header,
  layout: (state) => state.layout,
  logo: (state) => state.logo,
  tabsBar: (state) => state.tabsBar,
  themeBar: (state) => state.themeBar,
  theme: (state) => state.theme,
  hasNetwork: (state) => state.hasNetwork,
}
const mutations = {
  changeTheme: (state, theme) => {
    if (theme) state.theme = theme
  },
  changeLayout: (state, layout) => {
    if (layout) state.layout = layout
  },
  changeHeader: (state, header) => {
    if (header) state.header = header
  },
  changeTabsBar: (state, tabsBar) => {
    if (tabsBar) state.tabsBar = tabsBar
  },
  changeCollapse: (state) => {
    state.collapse = !state.collapse
  },
  foldSideBar: (state) => {
    state.collapse = true
  },
  openSideBar: (state) => {
    state.collapse = false
  },
  toggleDevice: (state, device) => {
    state.device = device
  },
  changeNetwork: (state, hasNetwork) => {
    state.hasNetwork = hasNetwork
  },
}
const actions = {
  changeTheme({ commit }, theme) {
    commit('changeTheme', theme)
  },
  changeLayout({ commit }, layout) {
    commit('changeLayout', layout)
  },
  changeHeader({ commit }, header) {
    commit('changeHeader', header)
  },
  changeTabsBar({ commit }, tabsBar) {
    commit('changeTabsBar', tabsBar)
  },
  changeCollapse({ commit }) {
    commit('changeCollapse')
  },
  foldSideBar({ commit }) {
    commit('foldSideBar')
  },
  openSideBar({ commit }) {
    commit('openSideBar')
  },
  toggleDevice({ commit }, device) {
    commit('toggleDevice', device)
  },
  changeNetwork({ commit }, hasNetwork) {
    commit('changeNetwork', hasNetwork)
  },
}
export default { state, getters, mutations, actions }
