<template>
  <div id="shark-admin">
    <sk-network />
    <router-view v-if="isReady" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isReady: true,
      }
    },
    created() {
      this.isReady = false
      this.$store.dispatch('lang/loadLangAsync')
      this.$nextTick(() => {
        this.isReady = true
      })
    },
    mounted() {},
    methods: {
      async particlesLoaded(container) {
        console.log('loaded', container)
      },
    },
  }
</script>
