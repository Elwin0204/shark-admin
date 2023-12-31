import store from '@/store'

/**
 * @author Elwin
 * @description 获取角色权限
 */
export function getCurrentAuthority() {
  const roles = store.getters['user/permissions']
  return roles || ['admin']
}

/**
 * @author Elwin
 * @description 检查权限
 * @param {Array} authority
 * @returns {Boolean}
 */
export function checkAuth(authority = []) {
  let current = getCurrentAuthority()
  return current.some((item) => authority.includes(item))
}
