/**
 * @author Elwin
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
import { publicPath, routerMode } from '@/config'
import componentsRoutes from './modules/components'

Vue.use(VueRouter)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index'),
        meta: {
          title: '首页',
          i18n: 'menu.home',
          icon: 'home',
          affix: true,
        },
      },
    ],
  },
  componentsRoutes,
  {
    path: '/error',
    component: EmptyLayout,
    redirect: 'noRedirect',
    name: 'Error',
    meta: { title: '错误页', icon: 'bug' },
    children: [
      {
        path: '401',
        name: 'Error401',
        component: () => import('@/views/401'),
        meta: { title: '401' },
      },
      {
        path: '404',
        name: 'Error404',
        component: () => import('@/views/404'),
        meta: { title: '404' },
      },
    ],
  },
  {
    path: '/personalCenter',
    component: Layout,
    redirect: 'noRedirect',
    name: 'PersonalCenter',
    alwaysShow: true,
    meta: { title: '个人中心', icon: 'user-circle', permissions: ['admin'] },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/personalCenter/profile/index'),
        meta: { title: '我的资料', permissions: ['admin'] },
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/personalCenter/message/index'),
        meta: { title: '我的消息', permissions: ['admin'] },
      },
    ],
  },
  {
    path: '/system',
    component: Layout,
    redirect: 'noRedirect',
    name: 'system',
    meta: { title: '系统管理', icon: 'user-cog', permissions: ['admin'] },
    children: [
      {
        path: 'userManagement',
        name: 'UserManagement',
        component: () => import('@/views/system/userMgt/index'),
        meta: { title: '用户管理' },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: () => import('@/views/system/roleMgt/index'),
        meta: { title: '角色管理' },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: () => import('@/views/system/menuMgt/index'),
        meta: { title: '菜单管理', badge: 'New' },
      },
      {
        path: 'orgManagement',
        name: 'OrgManagement',
        component: () => import('@/views/system/orgMgt/index'),
        meta: { title: '组织管理', badge: 'New' },
      },
      {
        path: 'dictManagement',
        name: 'DictManagement',
        component: () => import('@/views/system/dictMgt/index'),
        meta: { title: '字典管理', badge: 'New' },
      },
      {
        path: 'fileManagement',
        name: 'FileManagement',
        component: () => import('@/views/system/fileMgt/index'),
        meta: { title: '文件管理', badge: 'New' },
      },
    ],
  },
  {
    path: '/log',
    component: Layout,
    redirect: 'noRedirect',
    name: 'log',
    alwaysShow: true,
    meta: { title: '日志管理', icon: 'clipboard-list', permissions: ['admin'] },
    children: [
      {
        path: 'errlog',
        name: 'ErrLog',
        component: () => import('@/views/log/errorLog/index'),
        meta: { title: '错误日志', permissions: ['admin'] },
      },
      {
        path: 'loginlog',
        name: 'LoginLog',
        component: () => import('@/views/log/loginLog/index'),
        meta: { title: '登录日志', permissions: ['admin'] },
      },
      {
        path: 'operatelog',
        name: 'OperateLog',
        component: () => import('@/views/log/operateLog/index'),
        meta: { title: '操作日志', permissions: ['admin'] },
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
})

export function resetRouter() {
  location.reload()
}

export default router
