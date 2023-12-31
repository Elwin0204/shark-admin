<template>
  <div class="sk-layout-cards">
    <div
      v-for="(item, index) in layoutList"
      :key="index"
      :class="{
        'layout-card': true,
        vertical: item.value === 'vertical',
        horizontal: item.value === 'horizontal',
      }"
      @click="handleLayout(item.value)"
    >
      <v-icon
        v-if="item.value === value"
        name="check"
        class="layout-icon"
      ></v-icon>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SkLayoutCards',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        layoutList: [
          {
            value: 'vertical',
            label: '侧边菜单布局',
            color: ['#5E7CE0', '#96ADFA', '#fff'],
            icon: '#fff',
          },
          {
            value: 'horizontal',
            label: '顶部菜单布局',
            color: ['#409EFF', '#79bbff', '#fff'],
            icon: '#fff',
          },
        ],
      }
    },
    methods: {
      handleLayout(theme) {
        this.$emit('input', theme)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .sk-layout-cards {
    display: flex;
    .layout-card {
      position: relative;
      width: 44px;
      height: 36px;
      margin-right: 16px;
      overflow: hidden;
      background-color: #f0f2f5;
      border-radius: 4px;
      box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
      cursor: pointer;
      .layout-icon {
        position: absolute;
        right: 6px;
        bottom: 4px;
      }
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 33%;
        height: 100%;
        background-color: transparent;
        content: '';
      }
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25%;
        background-color: transparent;
        content: '';
      }

      &.vertical::before {
        z-index: 1;
        background-color: #181b25;
        content: '';
      }
      &.vertical::after {
        background-color: #fff;
      }
      &.horizontal::before {
        background-color: transparent;
        content: '';
      }
      &.horizontal::after {
        background-color: #181b25;
      }
      .layout-text {
        color: #fff;
      }
    }
  }
</style>
