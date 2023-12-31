<template>
  <el-breadcrumb
    class="breadcrumb-container"
    separator-class="el-icon-arrow-right"
  >
    <el-breadcrumb-item v-for="item in list" :key="item.path">
      {{ formatBreadcrumbTitle(item.meta) }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  import { i18nRender } from '@/i18n'
  export default {
    name: 'SkBreadcrumb',
    data() {
      return {
        list: this.getBreadcrumb(),
      }
    },
    watch: {
      $route() {
        this.list = this.getBreadcrumb()
      },
    },
    methods: {
      getBreadcrumb() {
        return this.$route.matched.filter(
          (item) => item.name && item.meta.title
        )
      },
      formatBreadcrumbTitle(meta) {
        return (meta.i18n && i18nRender(meta.i18n)) || meta.title
      },
    },
  }
</script>

<style lang="scss" scoped>
  .breadcrumb-container {
    height: $base-nav-bar-height;
    font-size: $base-font-size-default;
    line-height: $base-nav-bar-height;

    ::v-deep {
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          a {
            display: flex;
            float: left;
            font-weight: normal;
            color: #515a6e;

            i {
              margin-right: 3px;
            }
          }
        }

        &:last-child {
          .el-breadcrumb__inner {
            a {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
