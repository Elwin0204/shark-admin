<template>
  <span v-if="themeBar">
    <v-icon
      title="項目配置"
      name="palette"
      class="sk-fa-icon"
      @click="handleOpenThemeBar"
    />
    <div class="theme-bar-setting">
      <div @click="handleOpenThemeBar">
        <v-icon name="palette" class="sk-fa-icon" />
        <p>項目配置</p>
      </div>
      <div @click="handleGetCode">
        <v-icon name="laptop-code" class="sk-fa-icon"></v-icon>
        <p>拷贝源码</p>
      </div>
    </div>

    <el-drawer
      title="項目配置"
      :visible.sync="drawerVisible"
      direction="rtl"
      append-to-body
      size="300px"
    >
      <el-scrollbar style="height: 80vh; overflow: hidden">
        <div class="el-drawer__body">
          <el-form ref="form" :model="theme" label-position="top">
            <el-form-item label="主题">
              <sk-theme-cards v-model="theme.name" />
            </el-form-item>
            <el-divider></el-divider>
            <el-form-item label="布局">
              <sk-layout-cards v-model="theme.layout" />
            </el-form-item>
            <el-form-item>
              <div class="custom-form-item">
                <span>固定头部</span>
                <el-tooltip
                  :content="theme.header | formatHeader"
                  placement="top"
                >
                  <el-switch
                    v-model="theme.header"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="fixed"
                    inactive-value="noFixed"
                  ></el-switch>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="custom-form-item">
                <span>多标签</span>
                <el-tooltip
                  :content="theme.tabsBar | formatTabsBar"
                  placement="top"
                >
                  <el-switch
                    v-model="theme.tabsBar"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="true"
                    inactive-value="false"
                  ></el-switch>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-divider></el-divider>
            <div class="confirm-settings">
              <!-- <el-button type="primary" @click="handleSaveTheme">
                保存
              </el-button> -->
              <div
                class="btn-confirm btn-confirm-primary"
                @click="handleSaveTheme"
              >
                <div class="line_tl"></div>
                <div class="line_tr"></div>
                <span class="btn-inner">设置</span>
                <div class="line_bl"></div>
                <div class="line_br"></div>
                <div class="line_all"></div>
              </div>
            </div>
          </el-form>
        </div>
      </el-scrollbar>
    </el-drawer>
  </span>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { layout as defaultLayout } from '@/config'
  export default {
    name: 'SkThemeBar',
    filters: {
      formatHeader(value) {
        const mapping = {
          fixed: '固定头部',
          noFixed: '不固定头部',
        }
        return mapping[value]
      },
      formatTabsBar(value) {
        const mapping = {
          true: '开启',
          false: '不开启',
        }
        return mapping[value.toString()]
      },
    },
    data() {
      return {
        drawerVisible: false,
        theme: {
          name: 'default',
          layout: '',
          header: 'fixed',
          tabsBar: true,
        },
      }
    },
    computed: {
      ...mapGetters({
        layout: 'settings/layout',
        header: 'settings/header',
        tabsBar: 'settings/tabsBar',
        themeBar: 'settings/themeBar',
        themeName: 'settings/theme',
      }),
    },
    created() {
      this.$baseEventBus.$on('theme', () => {
        this.handleOpenThemeBar()
      })
      const theme = localStorage.getItem('theme')
      if (null !== theme) {
        this.theme = JSON.parse(theme)
        this.handleSetTheme()
      } else {
        this.theme.layout = this.layout
        this.theme.header = this.header
        this.theme.tabsBar = this.tabsBar
      }
    },
    methods: {
      ...mapActions({
        changeLayout: 'settings/changeLayout',
        changeHeader: 'settings/changeHeader',
        changeTabsBar: 'settings/changeTabsBar',
        changeTheme: 'settings/changeTheme',
      }),
      handleIsMobile() {
        return document.body.getBoundingClientRect().width - 1 < 992
      },
      handleOpenThemeBar() {
        this.drawerVisible = true
      },
      handleSetTheme() {
        let { name, layout, header, tabsBar } = this.theme
        localStorage.setItem(
          'theme',
          `{
            "name":"${name}",
            "layout":"${layout}",
            "header":"${header}",
            "tabsBar":"${tabsBar}"
          }`
        )
        if (!this.handleIsMobile()) this.changeLayout(layout)
        this.changeHeader(header)
        this.changeTabsBar(tabsBar)
        this.changeTheme(name)
        document.getElementsByTagName('body')[0].className = `theme-${name}`
        this.drawerVisible = false
      },
      handleSaveTheme() {
        this.handleSetTheme()
      },
      handleSetDfaultTheme() {
        let { name } = this.theme
        document
          .getElementsByTagName('body')[0]
          .classList.remove(`theme-${name}`)
        localStorage.removeItem('theme')
        this.$refs['form'].resetFields()
        Object.assign(this.$data, this.$options.data())
        this.changeHeader(defaultLayout)
        this.theme.name = 'default'
        this.theme.layout = this.layout
        this.theme.header = this.header
        this.theme.tabsBar = this.tabsBar
        this.drawerVisible = false
        location.reload()
      },
      handleGetCode() {
        const url = 'https://github.com/elwin0204/shark-admin'
        let path = this.$route.path + '/index.vue'
        if (path === '/vab/menu1/menu1-1/menu1-1-1/index.vue') {
          path = '/vab/nested/menu1/menu1-1/menu1-1-1/index.vue'
        }
        if (path === '/vab/icon/awesomeIcon/index.vue') {
          path = '/vab/icon/index.vue'
        }
        if (path === '/vab/icon/remixIcon/index.vue') {
          path = '/vab/icon/remixIcon.vue'
        }
        if (path === '/vab/icon/colorfulIcon/index.vue') {
          path = '/vab/icon/colorfulIcon.vue'
        }
        if (path === '/vab/table/comprehensiveTable/index.vue') {
          path = '/vab/table/index.vue'
        }
        if (path === '/vab/table/inlineEditTable/index.vue') {
          path = '/vab/table/inlineEditTable.vue'
        }
        window.open(url + path)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @mixin right-bar {
    position: fixed;
    right: 0;
    z-index: $base-z-index;
    width: 60px;
    min-height: 60px;
    text-align: center;
    cursor: pointer;
    background: $base-color-blue;
    border-radius: $base-border-radius;

    > div {
      padding-top: 10px;
      border-bottom: 0 !important;

      &:hover {
        opacity: 0.9;
      }

      & + div {
        border-top: 1px solid $base-color-white;
      }

      p {
        padding: 0;
        margin: 0;
        font-size: $base-font-size-small;
        line-height: 30px;
        color: $base-color-white;
      }
    }
  }

  .theme-bar-setting {
    @include right-bar;

    top: calc((100vh - 110px) / 2);

    ::v-deep {
      svg:not(:root).svg-inline--fa {
        display: block;
        margin-right: auto;
        margin-left: auto;
        color: $base-color-white;
      }

      .svg-icon {
        display: block;
        margin-right: auto;
        margin-left: auto;
        font-size: 20px;
        color: $base-color-white;
        fill: $base-color-white;
      }
    }
  }

  ::v-deep .el-drawer__header {
    margin-bottom: 0;
  }
  .el-drawer__body {
    padding: 20px;
    .custom-form-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #606266;
    }
    .confirm-settings {
      .btn-confirm {
        display: inline-block;
        zoom: 1;
        text-decoration: none;
        position: relative;
        color: #333;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        padding: 10px 20px;
        cursor: pointer;
      }
      .btn-confirm-primary {
        border: 1px solid rgba(0, 0, 0, 0.2);
        color: #606266;
      }
      .btn-confirm-primary:hover {
        color: $base-btn-color;
        transition-delay: 0.3s;
        -webkit-transition-delay: 0.3s;
      }
      .btn-confirm-primary > div {
        position: absolute;
        border-style: solid;
        border-width: 0;
        width: 0.6em;
        height: 0.6em;
        transition: all 0.3s;
        -webkit-transition: all 0.3s;
      }
      .btn-confirm-primary .line_tl {
        left: -1px;
        top: -1px;
        border-top-width: 1px;
        border-left-width: 1px;
        border-color: rgba(0, 0, 0, 0.8);
      }
      .btn-confirm-primary .line_tr {
        right: -1px;
        top: -1px;
        border-top-width: 1px;
        border-right-width: 1px;
        border-color: rgba(0, 0, 0, 0.8);
      }
      .btn-confirm-primary .line_bl {
        left: -1px;
        bottom: -1px;
        border-bottom-width: 1px;
        border-left-width: 1px;
        border-color: rgba(0, 0, 0, 0.8);
      }
      .btn-confirm-primary .line_br {
        right: -1px;
        bottom: -1px;
        border-bottom-width: 1px;
        border-right-width: 1px;
        border-color: rgba(0, 0, 0, 0.8);
      }
      .btn-confirm-primary .line_all {
        width: auto;
        height: auto;
        border-color: $base-btn--border-color;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        transition: border-width 0s;
        -webkit-transition: border-width 0s;
      }
      .btn-confirm-primary:hover > div {
        width: 55%;
        height: 55%;
      }
      .btn-confirm-primary:hover .line_all {
        width: auto;
        height: auto;
        border-width: 1px;
        transition-delay: 0.3s;
        -webkit-transition-delay: 0.3s;
      }
      .btn-confirm-primary span {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
<style lang="scss">
  .el-drawer__wrapper {
    outline: none !important;

    * {
      outline: none !important;
    }
  }

  .sk-color-picker {
    .el-color-dropdown__link-btn {
      display: none;
    }
  }
</style>
