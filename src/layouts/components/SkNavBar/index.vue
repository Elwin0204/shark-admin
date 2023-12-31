<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            v-if="topCollpase"
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
          <sk-breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <v-icon
            title="无网络提示"
            name="wifi"
            class="sk-fa-icon"
            @click="showNetworkTip"
          />
          <sk-error-log />
          <sk-full-screen-bar @refresh="refreshRoute" />
          <sk-theme-bar class="hidden-xs-only" />
          <v-icon
            title="重载所有路由"
            name="redo"
            class="sk-fa-icon"
            @click="refreshRoute"
          />
          <sk-lang />
          <sk-avatar />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { topCollpase } from '@/config'

  export default {
    name: 'SkNavBar',
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        visitedRoutes: 'tabsBar/visitedRoutes',
        device: 'settings/device',
        routes: 'routes/routes',
      }),
      topCollpase() {
        return topCollpase
      },
    },
    methods: {
      ...mapActions({
        changeCollapse: 'settings/changeCollapse',
        changeNetwork: 'settings/changeNetwork',
      }),
      handleCollapse() {
        this.changeCollapse()
      },
      showNetworkTip() {
        this.changeNetwork(false)
      },
      async refreshRoute() {
        this.$baseEventBus.$emit('reload-router-view')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;

    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;

      .fold-unfold {
        color: $base-color-gray;
        cursor: pointer;
      }

      ::v-deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;

      ::v-deep {
        svg {
          width: 1em;
          height: 1em;
          margin-right: 15px;
          font-size: $base-font-size-small;
          color: $base-color-gray;
          cursor: pointer;
          fill: $base-color-gray;
          &.sk-icon-lang {
            margin-right: 0;
          }
        }

        .theme-bar-setting {
          .sk-fa-icon {
            margin-right: 0;
          }
        }

        button {
          svg {
            margin-right: 0;
            color: $base-color-white;
            cursor: pointer;
            fill: $base-color-white;
          }
        }

        .el-badge {
          margin-right: 15px;
        }
      }
    }
  }
</style>
