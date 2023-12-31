<template>
  <div class="sk-theme-cards">
    <div
      v-for="(item, index) in themeList"
      :key="index"
      :class="{
        'theme-card': true,
        'is-active': item.value === value,
      }"
      :style="{
        backgroundImage: `linear-gradient(155deg, ${item.color[0]} 0%, ${item.color[1]} 60%, ${item.color[2]} 100%)`,
      }"
      @click="handleTheme(item.value)"
    >
      <span class="theme-text">{{ item.label }}</span>
      <v-icon
        v-if="item.value === value"
        name="check-circle"
        scale="1.5"
        :style="{ fill: item.icon }"
      ></v-icon>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SkThemeCards',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        themeList: [
          {
            value: 'default',
            label: '默认',
            color: ['#5E7CE0', '#96ADFA', '#fff'],
            icon: '#fff',
          },
          {
            value: 'blue-sky',
            label: '蔚蓝晴空',
            color: ['#409EFF', '#79bbff', '#fff'],
            icon: '#fff',
          },
          {
            value: 'dark-knight',
            label: '暗黑骑士',
            color: ['#1f2022', '#71757F', '#fff'],
            icon: '#fff',
          },
        ],
      }
    },
    methods: {
      handleTheme(theme) {
        this.$emit('input', theme)
      },
    },
  }
</script>
<style lang="scss" scoped>
  @keyframes flowing {
    100% {
      background-position: -150% 0;
    }
  }
  .sk-theme-cards {
    .theme-card {
      height: 40px;
      width: 180px;
      padding: 4px 12px;
      border-radius: 4px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      background-size: 300%;
      cursor: pointer;
      &:hover {
        animation: flowing 2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
      .theme-text {
        color: #fff;
      }
    }
  }
</style>
