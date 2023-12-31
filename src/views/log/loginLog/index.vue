<template>
  <div class="operateLog-container">
    <el-card>
      <el-form :model="queryForm" label-width="80px" @submit.native.prevent>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="用户账号">
              <el-input v-model="queryForm.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="用户名">
              <el-input v-model="queryForm.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查询</el-button>
              <el-button @click="reset">重置</el-button>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"></el-col>
        </el-row>
      </el-form>
      <el-table
        v-loading="listLoading"
        :data="operateLogs"
        :element-loading-text="elementLoadingText"
        :row-class-name="tableRowClassName"
        :header-cell-style="{ background: '#4372c3', color: '#252b3a' }"
        border
      >
        <el-table-column label="账号" fixed="left">
          <template slot-scope="{ row }">
            {{ row.account }}
          </template>
        </el-table-column>
        <el-table-column label="用户名">
          <template slot-scope="{ row }">
            {{ row.name }}
          </template>
        </el-table-column>
        <el-table-column label="IP地址" width="180">
          <template slot-scope="{ row }">
            {{ row.ipAddrees }}
          </template>
        </el-table-column>
        <el-table-column label="设备型号" width="360">
          <template slot-scope="{ row }">
            {{ row.unitType }}
          </template>
        </el-table-column>
        <el-table-column label="操作系统" width="240">
          <template slot-scope="{ row }">
            {{ row.operatingSystem }}
          </template>
        </el-table-column>
        <el-table-column label="操作类型" width="120">
          <template slot-scope="{ row }">
            {{ row.operatingType }}
          </template>
        </el-table-column>
        <el-table-column label="浏览器" width="180">
          <template slot-scope="{ row }">
            {{ row.browser }}
          </template>
        </el-table-column>
        <el-table-column label="备注" width="180">
          <template slot-scope="{ row }">
            {{ row.remark }}
          </template>
        </el-table-column>
        <el-table-column label="登录时间" width="180">
          <template slot-scope="{ row }">
            {{ row.joinTime }}
          </template>
        </el-table-column>
        <el-table-column width="120" label="操作" fixed="right" align="center">
          <template slot-scope="{ row }">
            <el-button type="primary" plain @click="showDetail(row)">
              <span class="btn-detail">
                <v-icon name="info-circle"></v-icon>
                <span style="margin-left: 5px">详情</span>
              </span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :current-page="queryForm.pageNo"
        :page-size="queryForm.pageSize"
        :layout="layout"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
  import { getLoginLogs } from '@/api/logs'
  export default {
    name: 'LoginLog',
    data() {
      return {
        listLoading: true,
        elementLoadingText: '正在加载...',
        layout: 'total, sizes, prev, pager, next, jumper',
        operateLogs: null,
        total: 0,
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          account: '',
          username: '',
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        this.listLoading = true
        const { data, totalCount } = await getLoginLogs(this.queryForm)
        this.operateLogs = data
        this.total = totalCount
        setTimeout(() => {
          this.listLoading = false
        }, 300)
      },
      handleSizeChange(val) {
        this.queryForm.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val
        this.fetchData()
      },
      tableRowClassName({ rowIndex }) {
        if (rowIndex % 2 === 0) {
          return 'warning-row'
        } else {
          return 'success-row'
        }
      },
      handleSearch() {
        this.fetchData()
      },
      reset() {
        this.queryForm.account = ''
        this.queryForm.username = ''
      },
      showDetail(row) {
        console.log('row', row)
      },
    },
  }
</script>
<style>
  .el-table .warning-row {
    background: #d9dff2;
  }

  .el-table .success-row {
    background: #fefefe;
  }
</style>
<style lang="scss" scoped>
  .operateLog-container {
    .btn-detail {
      display: flex;
      align-items: center;
      .fa-icon {
        color: red !important;
      }
    }
  }
</style>
