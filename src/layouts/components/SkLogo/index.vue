<template>
  <div :class="'logo-container-' + layout">
    <router-link
      to="/"
      style="display: inline-block"
      :style="{ width: collapse ? '65px' : '100%' }"
      :class="{
        animate__animated: true,
        animate__lightSpeedInLeft: animate,
      }"
    >
      <!-- 这里是logo变更的位置 -->
      <sk-colorful-icon
        v-if="logo.isVisble"
        class="logo"
        :icon-class="logo.icons[themeName] || 'shark'"
      />
      <span
        class="title"
        :class="{ 'hidden-xs-only': layout === 'horizontal' }"
        :title="title"
      >
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SkLogo',
    data() {
      return {
        title: this.$baseTitle,
        animate: false,
      }
    },
    computed: {
      ...mapGetters({
        logo: 'settings/logo',
        layout: 'settings/layout',
        themeName: 'settings/theme',
        collapse: 'settings/collapse',
      }),
    },
    mounted() {
      this.animate = true
    },
  }
</script>
<style lang="scss" scoped>
  @mixin container {
    position: relative;
    height: $base-top-bar-height;
    overflow: hidden;
    line-height: $base-top-bar-height;
    background: $base-menu-background;
  }

  @mixin logo {
    display: inline-block;
    width: 34px;
    height: 34px;
    margin-right: 3px;
    color: $base-title-color;
    vertical-align: middle;
  }

  @mixin title {
    display: inline-block;
    overflow: hidden;
    font-size: 24px;
    line-height: 55px;
    color: $base-title-color;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }

  .logo-container-horizontal {
    @include container;

    .logo {
      @include logo;
    }

    .title {
      @include title;
    }
  }

  .logo-container-vertical {
    @include container;

    height: $base-logo-height;
    line-height: $base-logo-height;
    text-align: center;

    .logo {
      @include logo;
    }

    .title {
      @include title;

      max-width: calc(#{$base-left-menu-width} - 60px);
    }
  }

  .animate__animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes lightSpeedInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
      transform: translate3d(-100%, 0, 0) skewX(30deg);
      opacity: 0;
    }

    60% {
      -webkit-transform: skewX(-20deg);
      transform: skewX(-20deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: skewX(5deg);
      transform: skewX(5deg);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes lightSpeedInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
      transform: translate3d(-100%, 0, 0) skewX(30deg);
      opacity: 0;
    }

    60% {
      -webkit-transform: skewX(-20deg);
      transform: skewX(-20deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: skewX(5deg);
      transform: skewX(5deg);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .animate__lightSpeedInLeft {
    -webkit-animation-name: lightSpeedInLeft;
    animation-name: lightSpeedInLeft;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
</style>
