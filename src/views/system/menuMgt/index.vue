<template>
  <div class="menuManagement-container">
    <el-card>
      <el-row type="flex" align="middle" :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form :inline="true" :model="queryForm" @submit.native.prevent>
            <el-form-item>
              <el-input
                v-model.trim="queryForm.menu"
                placeholder="请输入菜单名称"
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
            <el-button
              :icon="isExpandAll ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
              type="primary"
              @click="toggleExpand"
            >
              一键展开/折叠
            </el-button>
          </div>
        </el-col>
      </el-row>
      <el-table
        ref="REF_NavTree"
        :data="navList"
        row-key="id"
        border
        :default-expand-all="isExpandAll"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          show-overflow-tooltip
          prop="title"
          label="菜单名称"
          width="240"
          fixed="left"
        ></el-table-column>
        <el-table-column prop="id" label="id" width="120"></el-table-column>
        <el-table-column
          prop="parentId"
          label="父id"
          width="120"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="path"
          label="路由地址"
          width="240"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="component"
          label="组件路径"
          width="240"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="sort"
          label="排序"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column prop="hidden" label="是否隐藏" align="center">
          <template #default="{ row }">
            {{ row.hidden ? '是' : '否' }}
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="120" align="center">
          <template #default="{ row }">
            {{ row.type | typeFilter }}
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip label="图标" align="center">
          <template #default="{ row }">
            <v-icon v-if="row.icon" :name="row.icon"></v-icon>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip label="是否固定" align="center">
          <template #default="{ row }">
            {{ row.affix ? '是' : '否' }}
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip label="面包屑" align="center">
          <template #default="{ row }">
            {{ row.breadcrumb ? '否' : '是' }}
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="是否无缓存"
          width="150"
          align="center"
        >
          <template #default="{ row }">
            {{ row.noCache ? '是' : '否' }}
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip label="标签" align="center">
          <template #default="{ row }">
            {{ row.badge }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200" align="center">
          <template #default="{ row }">
            <el-button plain type="success" size="mini" @click="handleAdd(row)">
              新增
            </el-button>
            <el-button
              plain
              type="warning"
              size="mini"
              @click="handleEdit(row)"
            >
              修改
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
    </el-card>
    <edit-menu ref="edit" @fetch-data="fetchData"></edit-menu>
  </div>
</template>

<script>
  import { getRouterList as getList, getRouteList } from '@/api/router'
  import { getTree, doDelete } from '@/api/menuManagement'
  import EditMenu from './components/EditMenu'
  import { arr2Tree } from '@/utils/handleRoutes'

  export default {
    name: 'MenuManagement',
    components: { EditMenu },
    filters: {
      typeFilter(value) {
        const typeMapping = {
          menu: '菜单',
          page: '页面',
          button: '按钮',
        }
        return typeMapping[value] || value
      },
    },
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
        list: [],
        listLoading: true,
        elementLoadingText: '正在加载...',
        isExpandAll: false,
        navList: [],
        queryForm: {
          menu: '',
        },
      }
    },
    async created() {
      const roleData = await getTree()
      this.data = roleData.data
      this.fetchData()
      this.fetchNavData()
    },
    methods: {
      handleAdd(row) {
        this.$refs['edit'].showEdit('add', row)
      },
      handleEdit(row) {
        this.$refs['edit'].showEdit('edit', row)
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doDelete({ ids: row.id })
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        }
      },
      async fetchNavData() {
        const { data } = await getRouteList()
        this.navList = arr2Tree(data)
        console.log('nav', data, this.navList)
      },
      async fetchData() {
        this.listLoading = true

        const { data } = await getList()
        this.list = data
        setTimeout(() => {
          this.listLoading = false
        }, 300)
      },
      handleNodeClick(data) {
        this.fetchData()
      },
      queryData() {
        console.log('查询')
      },
      toggleExpand(value) {
        this.isExpandAll = !this.isExpandAll
        this.toggleRowExpansionAll(this.navList, this.isExpandAll)
      },
      toggleRowExpansionAll(data, isExpandAll) {
        data.forEach((item) => {
          this.$refs.REF_NavTree.toggleRowExpansion(item, isExpandAll)
          if (item.children && item.children.length > 0) {
            this.toggleRowExpansionAll(item.children, isExpandAll)
          }
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .menuManagement-container {
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
