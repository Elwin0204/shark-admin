/**
 * @author Elwin
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
export function convertRouter(asyncRoutes) {
  return asyncRoutes.nodeMap((route) => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = (resolve) => require(['@/layouts'], resolve)
      } else if (route.component === 'EmptyLayout') {
        route.component = (resolve) =>
          require(['@/layouts/EmptyLayout'], resolve)
      } else {
        const index = route.component.indexOf('views')
        const path =
          index > 0 ? route.component.slice(index) : `views/${route.component}`
        route.component = (resolve) => require([`@/${path}`], resolve)
      }
    }
    if (route.children && route.children.length)
      route.children = convertRouter(route.children)
    if (route.children && route.children.length === 0) delete route.children
    return route
  })
}

/**
 * @author Elwin
 * @description 判断当前路由是否包含权限
 * @param permissions
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(permissions, route) {
  if (route.meta && route.meta.permissions) {
    return permissions.some((role) => route.meta.permissions.includes(role))
  } else {
    return true
  }
}

/**
 * @author Elwin
 * @description intelligence模式根据permissions数组拦截路由
 * @param routes
 * @param permissions
 * @returns {[]}
 */
export function filterAsyncRoutes(routes, permissions) {
  const finallyRoutes = []
  routes.forEach((route) => {
    const item = { ...route }
    if (hasPermission(permissions, item)) {
      if (item.children) {
        item.children = filterAsyncRoutes(item.children, permissions)
      }
      finallyRoutes.push(item)
    }
  })
  return finallyRoutes
}

/**
 * @author Elwin
 * @description 将数组转为树形结构
 * @param nodeList 节点数组
 * @param assignPermission 分配权限时按钮节点如何处理
 * @returns {[]}
 */
export function arr2Tree(nodeList, assignPermission = false) {
  const nodeTree = []
  const nodeMap = {}
  for (const node of nodeList) {
    nodeMap[node.id] = { ...node, children: [], btnPermissions: [] }
  }
  for (const node of nodeList) {
    if (!node.parentId) {
      nodeTree.push(nodeMap[node.id])
    } else {
      if (node.type === 'button' && assignPermission) {
        nodeMap[node.parentId].btnPermissions.push(nodeMap[node.id])
      } else {
        nodeMap[node.parentId].children.push(nodeMap[node.id])
      }
    }
  }
  return nodeTree
}
