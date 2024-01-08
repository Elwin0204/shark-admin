<template>
  <div class="org-container">
    <div
      class="org-side"
      :style="{ width: isFolded ? `0px` : `${sideWidth}px` }"
    >
      <div v-show="!isFolded">
        <div>
          <el-button-group>
            <el-button
              type="success"
              icon="el-icon-circle-plus-outline"
              @click="handleOrgAdd"
            >
              新增
            </el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="handleOrgEdit"
            >
              修改
            </el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="handleOrgDelete"
            >
              删除
            </el-button>
          </el-button-group>
        </div>
        <org-tree ref="REF_OrgTree" :data="orgData"></org-tree>
      </div>
      <div class="btn-fold" @click="toggleSide">
        <i :class="foldIcon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import OrgTree from './components/OrgTree'
  import { getOrgList } from '@/api/orgManagement'
  export default {
    name: 'OrgManagement',
    components: {
      OrgTree,
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
          keyWord: '',
          code: '',
        },
        isFolded: false,
        sideWidth: 300,
        orgData: [],
      }
    },
    computed: {
      foldIcon() {
        return this.isFolded ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
      },
    },
    created() {
      this.fetchOrgData()
    },
    methods: {
      toggleSide() {
        this.isFolded = !this.isFolded
      },
      setSelectRows(val) {
        this.selectRows = val
      },
      handleOrgAdd() {},
      handleOrgEdit() {},
      handleOrgDelete() {},
      async fetchOrgData() {
        const { data } = await getOrgList()
        this.orgData = data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .org-container {
    height: 100%;
    display: flex;
    .org-side {
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
    .org-main {
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
      .el-tree {
        padding: 12px 0;
      }
    }
  }
</style>
