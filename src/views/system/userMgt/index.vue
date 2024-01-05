<template>
  <div class="user-container">
    <el-card>
      <el-row type="flex" :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form :inline="true" :model="queryForm" @submit.native.prevent>
            <el-form-item>
              <el-input
                v-model.trim="queryForm.username"
                placeholder="请输入用户名"
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
        :header-cell-style="{ textAlign: 'center' }"
        @selection-change="setSelectRows"
      >
        <el-table-column
          show-overflow-tooltip
          type="selection"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="id"
          label="编号"
          width="120"
          fixed="left"
        ></el-table-column>
        <el-table-column prop="avatar" label="头像" width="150">
          <template slot-scope="scope">
            <el-popover placement="top" trigger="hover">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.avatar"
                fit="cover"
              ></el-image>
              <p slot="reference" class="avatar-url">
                {{ scope.row.avatar }}
              </p>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="username"
          label="姓名"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="email"
          label="邮箱"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="gender"
          label="性别"
          align="center"
        >
          <template #default="{ row }">
            {{ row.gender | genderFilter }}
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="age"
          label="年龄"
          align="center"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="signature"
          label="签名"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="datatime"
          label="修改时间"
        ></el-table-column>
        <el-table-column show-overflow-tooltip label="权限">
          <template #default="{ row }">
            {{ row.permissions | permissionsFilter }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template #default="{ row }">
            <el-tag effect="dark" :type="row.status | statusTagFilter">
              {{ row.status | statusFilter }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="操作"
          width="200"
          fixed="right"
          align="center"
        >
          <template #default="{ row }">
            <el-button
              type="primary"
              plain
              size="mini"
              @click="handleEdit(row)"
            >
              编辑
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
    <user-edit ref="REF_UserEdit" @fetch-data="fetchData"></user-edit>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/userManagement'
  import UserEdit from './components/UserEdit'
  import { enableLocalforage } from '@/config'
  export default {
    name: 'UserManagement',
    components: { UserEdit },
    filters: {
      statusTagFilter(value) {
        if (value === 'Y') {
          return 'success'
        } else if (value === 'N') {
          return 'info'
        } else {
          return 'danger'
        }
      },
      statusFilter(value) {
        if (value === 'Y') {
          return '启用'
        } else if (value === 'N') {
          return '禁用'
        } else {
          return '无效数据'
        }
      },
      permissionsFilter(value) {
        return JSON.stringify(value)
      },
      genderFilter(value) {
        if (value === 'MAN') {
          return '男'
        } else if (value === 'WOMAN') {
          return '女'
        } else {
          return value
        }
      },
    },
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
          this.$refs['REF_UserEdit'].showEdit(row)
        } else {
          this.$refs['REF_UserEdit'].showEdit()
        }
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doDelete({ ids: row.id })
            const localUserList =
              (await this.$dbInstance.getItem('userList')) || []
            const newUserList = localUserList.filter(
              (item) => item.id !== row.id
            )
            await this.$dbInstance.setItem('userList', newUserList)
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        } else {
          if (this.selectRows.length > 0) {
            const ids = this.selectRows.map((item) => item.id).join()
            this.$baseConfirm('你确定要删除选中项吗', null, async () => {
              const { msg } = await doDelete({ ids })
              const localUserList =
                (await this.$dbInstance.getItem('userList')) || []
              const newUserList = localUserList.filter(
                (item) => !ids.includes(item.id)
              )
              await this.$dbInstance.setItem('userList', newUserList)
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
      async queryData() {
        this.queryForm.pageNo = 1
        this.fetchData()
      },
      async fetchDataLocal() {
        const localUserList = (await this.$dbInstance.getItem('userList')) || []
        const { data } = await getList(this.queryForm)
        const userList = this.$baseLodash.unionWith(
          data,
          localUserList,
          this.$baseLodash.isEqual
        )
        const { title = '', pageNo = 1, pageSize = 20 } = this.queryForm
        const mockList = userList.filter((item) => {
          if (title && item.title.indexOf(title) < 0) return false
          return true
        })
        const pageList = mockList.filter(
          (item, index) =>
            index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
        )
        return {
          data: pageList,
          totalCount: mockList.length,
        }
      },
      async fetchData() {
        this.listLoading = true
        const { data, totalCount } = enableLocalforage
          ? await this.fetchDataLocal()
          : await getList(this.queryForm)
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
  .user-container {
    ::v-deep {
      .btns-box {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        .el-form-item {
          margin-bottom: 0;
        }
      }
      .el-button--mini {
        padding: 4px 8px;
      }
    }
    .avatar-url {
      width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
