<template>
  <div class="icon-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-divider content-position="left">点击图标即可复制源码</el-divider>
      </el-col>
      <el-col :span="24">
        <el-form :inline="true" label-width="80px" @submit.native.prevent>
          <el-form-item label="图标名称">
            <el-input v-model="queryForm.title"></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button native-type="submit" type="primary" @click="queryData">
              搜索
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col
        v-for="(item, index) in queryIcon"
        :key="index"
        :xs="8"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="2"
      >
        <el-card
          shadow="hover"
          style="cursor: pointer; height: 60px"
          @click.native="handleCopyIcon(index, $event)"
        >
          <v-icon :name="item" />
          <div class="icon-name">{{ item }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-pagination
          :background="background"
          :current-page="queryForm.pageNo"
          :page-size="queryForm.pageSize"
          :page-sizes="[72, 144, 216, 288]"
          :layout="layout"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import clip from '@/utils/clipboard'
  import { getIconList } from '@/api/icon'

  export default {
    name: 'AwesomeIcon',
    data() {
      return {
        copyText: '',
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        background: true,
        height: 0,
        selectRows: '',
        elementLoadingText: '正在加载...',
        queryIcon: [],
        queryForm: {
          pageNo: 1,
          pageSize: 72,
          title: '',
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      handleSizeChange(val) {
        this.queryForm.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val
        this.fetchData()
      },
      queryData() {
        this.queryForm.pageNo = 1
        this.fetchData()
      },
      async fetchData() {
        const { data, totalCount } = await getIconList(this.queryForm)
        this.queryIcon = data
        this.allIcon = data
        this.total = totalCount
      },
      handleCopyIcon(index, event) {
        const copyText = `<v-icon name="${this.queryIcon[index]}"></v-icon>`
        this.copyText = copyText
        clip(copyText, event)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .icon-container {
    ::v-deep {
      .el-card__body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */

        svg:not(:root).svg-inline--fa {
          font-size: 18px;
          color: $base-color-gray;
          text-align: center;
          vertical-align: middle;
          pointer-events: none;
          cursor: pointer;
        }
      }
    }

    .icon-name {
      height: 30px;
      width: 100%;
      overflow: hidden;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
