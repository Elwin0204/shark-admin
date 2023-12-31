<template>
  <div
    class="sk-collapse"
    :class="{ 'is-collapse': collapse }"
    @click="handleCollapse"
  >
    <div class="sk-icon-bg">
      <v-icon
        :name="collapse ? 'angle-right' : 'angle-left'"
        class="sk-icon-toggle"
      ></v-icon>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'SkCollapse',
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
      }),
    },
    methods: {
      ...mapActions({
        changeCollapse: 'settings/changeCollapse',
      }),
      handleCollapse() {
        this.changeCollapse()
      },
    },
  }
</script>
<style lang="scss" scoped>
  .sk-collapse {
    height: 110px;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -10000;
    width: 276px;
    cursor: pointer;
    background: transparent;
    overflow: hidden;
    .sk-icon-bg {
      position: absolute;
      top: 50%;
      right: -20px;
      transform: translateY(-50%);
      width: 0px;
      height: 70px;
      border: 20px solid transparent;
    }
    .sk-icon-toggle {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .is-collapse {
    width: 85px;
  }
</style>
