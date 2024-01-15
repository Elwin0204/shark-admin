<template>
  <div>
    <el-row type="flex" :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="btn-box">
          <el-button icon="el-icon-plus" type="primary" @click="handleAdd">
            分配角色
          </el-button>
          <el-button
            icon="el-icon-delete"
            type="danger"
            @click="handleBatchDelete"
          >
            批量删除
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      v-loading="roleLoading"
      :data="roleTable"
      border
      :max-height="maxHeight"
      :element-loading-text="elementLoadingText"
      :header-cell-style="{ textAlign: 'center' }"
    >
      <el-table-column show-overflow-tooltip type="selection"></el-table-column>
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
          <el-button plain type="danger" size="mini" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { getList } from '@/api/roleManagement'
  import { getClientHeight } from '@/utils'
  export default {
    name: 'OrgRole',
    data() {
      return {
        roleTable: [],
        roleLoading: false,
        selectRows: '',
        elementLoadingText: '正在加载...',
        layout: 'total, sizes, prev, pager, next, jumper',
      }
    },
    computed: {
      maxHeight() {
        return getClientHeight() - 220
      },
    },
    created() {
      this.fetchRoleData()
    },
    methods: {
      async fetchRoleData() {
        this.roleLoading = true
        const { data } = await getList()
        this.roleTable = data
        setTimeout(() => {
          this.roleLoading = false
        }, 300)
      },
      handleAdd() {},
      handleBatchDelete() {},
      handleDelete() {},
    },
  }
</script>
<style lang="scss" scoped>
  .btn-box {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 18px;
  }
</style>
