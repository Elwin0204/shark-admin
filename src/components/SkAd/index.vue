<template>
  <div class="sk-ad">
    <el-carousel
      v-if="adList"
      height="30px"
      direction="vertical"
      :autoplay="true"
      :interval="3000"
      indicator-position="none"
    >
      <el-carousel-item v-for="(item, index) in adList" :key="index">
        <el-tag type="warning">Ad</el-tag>
        <a target="_blank" :href="item.url">{{ item.title }}</a>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert v-if="noticeList[0]" :closable="noticeList[0].closable">
          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <a target="_blank" href="javascript:void(0)">
              <img
                style="margin-right: 10px"
                src="https://img.shields.io/github/stars/elwin0204/shark-admin?style=flat-square&label=Stars&logo=github"
              />
            </a>
            <p v-html="noticeList[0].title"></p>
          </div>
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { getList } from '@/api/ad'
  import { getNoticeList } from '@/api/notice'
  export default {
    name: 'SkAd',
    data() {
      return {
        nodeEnv: process.env.NODE_ENV,
        adList: [],
        noticeList: [],
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const { data } = await getList()
        this.adList = data
        const res = await getNoticeList()
        this.noticeList = res.data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .sk-ad {
    a {
      color: #999;
    }
  }
</style>
