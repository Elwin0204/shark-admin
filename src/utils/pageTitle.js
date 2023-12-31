import { title } from '@/config'

/**
 * @author Elwin
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  if (pageTitle) return `${pageTitle}-${title}`
  return `${title}`
}
