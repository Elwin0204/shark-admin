/**
 * @author Elwin
 * @description 公共组件(布局和通用)及样式自动引入
 */

import Vue from 'vue'

// 布局组件
const requireLayouts = require.context('@/layouts/components', true, /\.vue$/)
requireLayouts.keys().forEach((fileName) => {
  const componentConfig = requireLayouts(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// 通用组件
const requireComponents = require.context('@/components', true, /\.vue$/)
requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// 主题样式
const requireThemes = require.context('@/styles/themes', true, /\.scss$/)
requireThemes.keys().forEach((fileName) => {
  require(`@/styles/themes/${fileName.slice(2)}`)
})
