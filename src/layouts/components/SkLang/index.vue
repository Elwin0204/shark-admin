<template>
  <el-dropdown trigger="click" placement="bottom" @command="switchLang">
    <span title="切换语言" class="sk-lang">
      <sk-remix-icon icon-class="lang" class="sk-icon-lang" />
      {{ formatLang }}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh_CN">中文简体</el-dropdown-item>
      <el-dropdown-item command="zh_TW">中文繁體</el-dropdown-item>
      <el-dropdown-item command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { langList } from '@/config'
  import { mapGetters } from 'vuex'
  export default {
    name: 'SkLang',
    computed: {
      ...mapGetters({
        lang: 'lang/lang',
      }),
      formatLang() {
        return langList[this.lang] || 'Language'
      },
    },
    methods: {
      switchLang(lang) {
        this.$store.dispatch('lang/switchLangAsync', lang)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .sk-lang {
    cursor: pointer;
    margin-right: 15px;
  }
</style>
