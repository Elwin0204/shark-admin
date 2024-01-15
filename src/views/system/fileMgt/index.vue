<template>
  <div class="file-container">
    <el-card>
      <div>
        <el-form :inline="true" :model="queryForm" @submit.native.prevent>
          <el-form-item>
            <el-input
              v-model.trim="queryForm.filename"
              placeholder="请输入文件名"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model.trim="queryForm.username"
              placeholder="请输入上传人"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" @click="queryData">
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-divider></el-divider>
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-button icon="el-icon-cloudy" type="primary" @click="uploadFile">
            上传文件
          </el-button>
          <el-button
            icon="el-icon-delete"
            type="danger"
            @click="handleBatchDelete"
          >
            批量删除
          </el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"></el-col>
      </el-row>

      <el-table
        v-loading="listLoading"
        :data="list"
        :element-loading-text="elementLoadingText"
        @selection-change="setSelectRows"
      >
        <el-table-column
          show-overflow-tooltip
          type="selection"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="id"
          label="id"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="fileName"
          label="文件名"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="username"
          label="上传人"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="datatime"
          label="上传时间"
        ></el-table-column>
        <el-table-column show-overflow-tooltip label="操作" width="200">
          <template #default="{ row }">
            <el-button
              icon="el-icon-bottom"
              type="primary"
              plain
              size="mini"
              @click="download(row)"
            >
              下载
            </el-button>
            <el-button
              type="danger"
              plain
              size="mini"
              @click="handleDelete(row)"
            >
              删除
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
    <user-edit ref="edit" @fetch-data="fetchData"></user-edit>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/fileManagement'
  import UserEdit from './components/UserEdit'

  export default {
    name: 'FileManagement',
    components: { UserEdit },
    data() {
      return {
        list: null,
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        selectRows: '',
        elementLoadingText: '正在加载...',
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          filename: '',
          username: '',
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      setSelectRows(val) {
        this.selectRows = val
      },
      handleEdit(row) {
        if (row.id) {
          this.$refs['edit'].showEdit(row)
        } else {
          this.$refs['edit'].showEdit()
        }
      },
      handleDelete(row) {
        this.$baseConfirm('你确定要删除当前项吗', null, async () => {
          const { msg } = await doDelete({ ids: row.id })
          this.$baseMessage(msg, 'success')
          this.fetchData()
        })
      },
      handleBatchDelete() {
        if (this.selectRows.length > 0) {
          const ids = this.selectRows.map((item) => item.id).join()
          this.$baseConfirm('你确定要删除选中项吗', null, async () => {
            const { msg } = await doDelete({ ids })
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        } else {
          this.$baseMessage('未选中任何行', 'error')
          return false
        }
      },
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
        this.listLoading = true
        const { data, totalCount } = await getList(this.queryForm)
        this.list = data
        this.total = totalCount
        setTimeout(() => {
          this.listLoading = false
        }, 300)
      },
      uploadFile() {},
      download() {},
    },
  }
</script>
<style lang="scss" scoped>
  .file-container {
    ::v-deep {
      .search-box {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
