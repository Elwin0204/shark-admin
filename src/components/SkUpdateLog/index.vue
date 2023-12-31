<template>
  <el-row :gutter="20" class="sk-update-log">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <el-card class="card" shadow="never">
        <div slot="header">
          <span>更新日志</span>
        </div>
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :color="activity.color"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import { getList } from '@/api/changeLog'
  export default {
    name: 'SkUpdateLog',
    data() {
      return {
        reverse: false,
        activities: [],
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const { data } = await getList()
        data.map((item, index) => {
          if (index === data.length - 1) {
            item.color = '#5e7ce0'
          }
        })
        this.activities = data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .sk-update-log {
    ::v-deep .el-card__body {
      padding-top: 10px;
    }
    .sk-card {
      .sk-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba($color: #000000, $alpha: 0.45);
        .card-icon-info {
          fill: rgba($color: #000000, $alpha: 0.45);
        }
      }
    }
  }
</style>
