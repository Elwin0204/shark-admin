<template>
  <div class="role-container">
    <el-card>
      <el-row type="flex" align="middle" :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form :inline="true" :model="queryForm" @submit.native.prevent>
            <el-form-item>
              <el-input
                v-model.trim="queryForm.role"
                placeholder="请输入角色"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-button
                icon="el-icon-search"
                type="primary"
                @click="queryData"
              >
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="btns-box">
            <el-button icon="el-icon-plus" type="primary" @click="handleEdit">
              新增
            </el-button>
            <el-button
              icon="el-icon-delete"
              type="danger"
              @click="handleDelete"
            >
              批量删除
            </el-button>
          </div>
        </el-col>
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
          prop="role"
          label="角色名称"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="roleCode"
          label="角色编码"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="remark"
          label="备注"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="datetime"
          label="创建时间"
        ></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default="{ row }">
            <el-button
              plain
              type="primary"
              size="mini"
              @click="handleEdit(row)"
            >
              编辑
            </el-button>
            <el-button
              plain
              type="success"
              size="mini"
              @click="assignPermission(row)"
            >
              分配权限
            </el-button>
            <el-button
              plain
              type="danger"
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
    <role-edit ref="edit" @fetch-data="fetchData"></role-edit>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/roleManagement'
  import RoleEdit from './components/RoleEdit'

  export default {
    name: 'RoleManagement',
    components: { RoleEdit },
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
          role: '',
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
        if (row.role) {
          this.$refs['edit'].showEdit(row)
        } else {
          this.$refs['edit'].showEdit()
        }
      },
      assignPermission(row) {
        console.log('assignPermission', row)
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doDelete({ ids: row.id })
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        } else {
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
    },
  }
</script>
<style lang="scss" scoped>
  .role-container {
    ::v-deep {
      .btns-box {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .el-form-item {
          margin-bottom: 0;
        }
      }
      .el-button--mini {
        padding: 4px 8px;
      }
    }
  }
</style>
