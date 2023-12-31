<template>
  <span :title="isFullscreen ? '退出全屏' : '进入全屏'">
    <v-icon
      :name="isFullscreen ? 'compress-arrows-alt' : 'expand-arrows-alt'"
      class="sk-fa-icon"
      @click="click"
    ></v-icon>
  </span>
</template>

<script>
  import screenfull from 'screenfull'

  export default {
    name: 'SkFullScreenBar',
    data() {
      return {
        isFullscreen: false,
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.destroy()
    },
    methods: {
      click() {
        if (!screenfull.isEnabled) {
          this.$baseMessage('开启全屏失败', 'error')
          return false
        }
        screenfull.toggle()
        this.$emit('refresh')
      },
      change() {
        this.isFullscreen = screenfull.isFullscreen
      },
      init() {
        if (screenfull.isEnabled) {
          screenfull.on('change', this.change)
        }
      },
      destroy() {
        if (screenfull.isEnabled) {
          screenfull.off('change', this.change)
        }
      },
    },
  }
</script>
