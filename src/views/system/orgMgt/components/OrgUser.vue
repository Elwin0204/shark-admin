<template>
  <div>
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
            <el-button icon="el-icon-search" type="primary" @click="queryData">
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
          <el-button icon="el-icon-delete" type="danger" @click="handleDelete">
            批量删除
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      v-loading="userLoading"
      :data="userTable"
      border
      :max-height="maxHeight"
      :element-loading-text="elementLoadingText"
      :header-cell-style="{ textAlign: 'center' }"
    >
      <el-table-column show-overflow-tooltip type="selection"></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="id"
        label="编号"
        width="120"
        fixed="left"
      ></el-table-column>
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
            type="danger"
            plain
            size="mini"
            @click="handleUserDelete(row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { getList } from '@/api/userManagement'
  import { getClientHeight } from '@/utils'
  export default {
    name: 'OrgUser',
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
        // return JSON.stringify(value)
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
        userTable: [],
        roleLoading: false,
        userLoading: false,
        selectRows: '',
        elementLoadingText: '正在加载...',
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        queryForm: {
          username: '',
        },
      }
    },
    computed: {
      maxHeight() {
        return getClientHeight() - 220
      },
    },
    created() {
      this.fetchUserData()
    },
    methods: {
      async fetchUserData() {
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
        this.userTable = pageList
        this.total = mockList.length
      },
      queryData() {},
      handleEdit() {},
      handleDelete() {},
    },
  }
</script>
<style lang="scss" scoped></style>
