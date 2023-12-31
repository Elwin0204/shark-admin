/**
 * @author Elwin
 * @description 主题样式
 */
const requireThemes = require.context('@/styles/themes', true, /\.scss$/)
requireThemes.keys().forEach((fileName) => {
  require(`@/styles/themes/${fileName.slice(2)}`)
})
