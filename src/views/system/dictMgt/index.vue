<template>
  <div class="dict-container">
    <div
      class="dict-side"
      :style="{ width: isFolded ? `0px` : `${sideWidth}px` }"
    >
      <div v-show="!isFolded">
        <div>
          <el-button-group>
            <el-button
              type="success"
              icon="el-icon-circle-plus-outline"
              @click="handleParentAdd"
            >
              新增
            </el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="handleParentEdit"
            >
              修改
            </el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="handleParentDelete"
            >
              删除
            </el-button>
          </el-button-group>
        </div>
        <dict-list
          :list="parentList"
          @change="handleParentItemChange"
        ></dict-list>
      </div>
      <div class="btn-fold" @click="toggleSide">
        <i :class="foldIcon"></i>
      </div>
    </div>
    <div class="dict-main">
      <el-row type="flex" :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form :inline="true" :model="queryForm" @submit.native.prevent>
            <el-form-item>
              <el-input
                v-model.trim="queryForm.keyWord"
                placeholder="请输入关键字"
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
              icon="el-icon-plus"
              type="primary"
              @click="handleChildEdit()"
            >
              新增
            </el-button>
            <el-button
              icon="el-icon-delete"
              type="danger"
              @click="handleChildDelete()"
            >
              批量删除
            </el-button>
          </div>
        </el-col>
      </el-row>
      <el-table
        v-loading="listLoading"
        :data="childrenList"
        border
        :element-loading-text="elementLoadingText"
        @selection-change="setSelectRows"
      >
        <el-table-column
          show-overflow-tooltip
          type="selection"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="name"
          label="字典项名称"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="code"
          label="字典项值"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="sort"
          label="排序"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="datetime"
          label="时间"
        ></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="{ row }">
            <el-button
              plain
              type="warning"
              size="mini"
              @click="handleChildEdit(row)"
            >
              编辑
            </el-button>
            <el-button
              plain
              type="danger"
              size="mini"
              @click="handleChildDelete(row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <parent-dict-edit
      ref="REF_ParentEdit"
      @fetch-data="fetchParentData"
    ></parent-dict-edit>
    <child-dict-edit
      ref="REF_ChildEdit"
      @fetch-data="fetchChildrenData"
    ></child-dict-edit>
  </div>
</template>

<script>
  import {
    getList as getDictList,
    getChildrenList,
    doDelete,
  } from '@/api/dictManagement'
  import ParentDictEdit from './components/ParentDictEdit'
  import ChildDictEdit from './components/ChildDictEdit'
  import DictList from './components/DictList'

  export default {
    name: 'DictManagement',
    components: { ParentDictEdit, ChildDictEdit, DictList },
    data() {
      return {
        parentList: [],
        childrenList: [],
        parentRow: {},
        listLoading: true,
        elementLoadingText: '正在加载...',
        queryForm: {
          keyWord: '',
          code: '',
        },
        isFolded: false,
        sideWidth: 300,
      }
    },
    computed: {
      foldIcon() {
        return this.isFolded ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
      },
    },
    created() {
      this.fetchParentData()
      this.fetchChildrenData()
    },
    methods: {
      toggleSide() {
        this.isFolded = !this.isFolded
      },
      setSelectRows(val) {
        this.selectRows = val
      },
      queryData() {
        this.fetchChildrenData()
      },
      async fetchParentData() {
        const { data } = await getDictList()
        this.parentList = data
      },
      handleParentItemChange(row) {
        this.parentRow = row
        this.queryForm.code = row.code
        this.fetchChildrenData()
      },
      async fetchChildrenData() {
        this.listLoading = true
        const { data } = await getChildrenList(this.queryForm)
        this.childrenList = data
        setTimeout(() => {
          this.listLoading = false
        }, 300)
      },
      handleParentAdd() {
        this.$refs['REF_ParentEdit'].showEdit()
      },
      handleParentEdit() {
        if (!this.parentRow || Object.keys(this.parentRow).length === 0) {
          this.$message.info('请点击父级字典项')
        } else {
          this.$refs['REF_ParentEdit'].showEdit(this.parentRow)
        }
      },
      handleParentDelete() {
        if (!this.parentRow || Object.keys(this.parentRow).length === 0) {
          this.$message.info('请点击父级字典项')
        } else {
          console.log('删除', this.parentRow)
        }
      },
      handleChildEdit(row) {
        if (row && row.code) {
          this.$refs['REF_ChildEdit'].showEdit(row)
        } else {
          this.$refs['REF_ChildEdit'].showEdit()
        }
      },
      handleChildDelete(row) {
        if (row && row.code) {
          this.$baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doDelete({ ids: row.id })
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        } else {
          if (this.selectRows.length > 0) {
            const ids = this.selectRows.map((item) => item.code).join()
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
    },
  }
</script>
<style lang="scss" scoped>
  .dict-container {
    height: 100%;
    display: flex;
    .dict-side {
      padding: 0px 15px 0 5px;
      height: 100%;
      border-right: 1px solid #e6e6e6;
      box-sizing: border-box;
      position: relative;
      .btn-fold {
        position: absolute;
        top: 39%;
        right: -13px;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        background-color: #fff;
        border: 1px solid #e6e6e6;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .dict-main {
      flex: 1;
      padding: 0 15px;
      overflow: auto;
    }

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
