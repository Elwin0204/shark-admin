<template>
  <el-submenu
    ref="subMenu"
    :index="handlePath(item.path)"
    :popper-append-to-body="false"
  >
    <template slot="title">
      <v-icon
        v-if="item.meta && item.meta.icon"
        :name="item.meta.icon"
        class="sk-fa-icon"
      />
      <sk-remix-icon
        v-if="item.meta && item.meta.remixIcon"
        :icon-class="item.meta.remixIcon"
        class="sk-remix-icon"
      />
      <span>{{ item.meta.title }}</span>
    </template>
    <slot />
  </el-submenu>
</template>

<script>
  import { isExternal } from '@/utils/validate'
  import path from 'path'

  export default {
    name: 'SkSubmenu',
    props: {
      routeChildren: {
        type: Object,
        default() {
          return null
        },
      },
      item: {
        type: Object,
        default() {
          return null
        },
      },
      fullPath: {
        type: String,
        default: '',
      },
    },
    methods: {
      handlePath(routePath) {
        if (isExternal(routePath)) {
          return routePath
        }
        if (isExternal(this.fullPath)) {
          return this.fullPath
        }
        return path.resolve(this.fullPath, routePath)
      },
    },
  }
</script>
<style scss scoped>
  .sk-fa-icon,
  .sk-remix-icon {
    margin-right: 5px;
  }
</style>
