/**
 * @author Elwin
 * @description 组件示例路由配置, 实际项目可配置关闭
 */

import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
const componentsRoutes = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Components',
  alwaysShow: true,
  meta: { title: '组件', icon: 'toolbox' },
  children: [
    {
      path: 'authority',
      name: 'Authority',
      component: () => import('@/views/components/authority/index'),
      meta: {
        title: '角色权限',
        permissions: ['admin', 'editor'],
      },
    },
    {
      path: 'icon',
      component: EmptyLayout,
      redirect: 'noRedirect',
      name: 'Icon',
      meta: {
        title: '图标',
        permissions: ['admin'],
      },
      children: [
        {
          path: 'awesomeIcon',
          name: 'AwesomeIcon',
          component: () => import('@/views/components/icon/index'),
          meta: { title: '单色图标' },
        },
        {
          path: 'colorfulIcon',
          name: 'ColorfulIcon',
          component: () => import('@/views/components/icon/colorIcons'),
          meta: { title: '多色图标' },
        },
      ],
    },
    {
      path: 'webSocket',
      name: 'WebSocket',
      component: () => import('@/views/components/webSocket/index'),
      meta: { title: 'webSocket', permissions: ['admin'] },
    },
    {
      path: 'menu1',
      component: () => import('@/views/components/nested/menu1/index'),
      name: 'Menu1',
      alwaysShow: true,
      meta: {
        title: '嵌套路由 1',
        permissions: ['admin'],
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu1-1',
          alwaysShow: true,
          meta: { title: '嵌套路由 1-1' },
          component: () =>
            import('@/views/components/nested/menu1/menu1-1/index'),

          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu1-1-1',
              meta: { title: '嵌套路由 1-1-1' },
              component: () =>
                import(
                  '@/views/components/nested/menu1/menu1-1/menu1-1-1/index'
                ),
            },
          ],
        },
      ],
    },
    {
      path: 'loading',
      name: 'Loading',
      component: () => import('@/views/components/loading/index'),
      meta: { title: 'loading', permissions: ['admin'] },
    },
  ],
}

export default componentsRoutes
