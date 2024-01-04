<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="800px"
    @close="close"
  >
    <el-tree
      ref="REF_MenuTree"
      :data="menuTree"
      :props="props"
      node-key="id"
      :load="loadNode"
      show-checkbox
      :check-strictly="checkStrictly"
      @check-change="handleCheckChange"
    >
      <span slot-scope="{ node, data }" class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span style="margin-left: 50px">
          <el-checkbox
            v-for="(item, index) in data.btnPermissions"
            :key="index"
            v-model="item.checked"
          >
            {{ item.title }}
          </el-checkbox>
        </span>
      </span>
    </el-tree>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { doEdit } from '@/api/roleManagement'
  import { getRouteList } from '@/api/router'
  import { arr2Tree } from '@/utils/handleRoutes'

  export default {
    name: 'RolePermission',
    data() {
      return {
        props: {
          label: 'title',
          children: 'children',
        },
        checkStrictly: false,
        menuTree: [],
        title: '分配权限',
        dialogFormVisible: false,
      }
    },
    created() {},
    methods: {
      async showPermission(row) {
        const { data } = await getRouteList()
        this.menuTree = arr2Tree(data, true)
        this.dialogFormVisible = true
      },
      handleCheckChange(data, checked, indeterminate) {
        const { btnPermissions } = data
        for (const item of btnPermissions) {
          this.$set(item, 'checked', checked)
        }
      },
      loadNode(node, resolve) {},
      close() {
        this.dialogFormVisible = false
      },
      getAllCheckedKeys() {
        const checkedKeys = this.$refs['REF_MenuTree'].getCheckedKeys()
        const halfCheckedKeys = this.$refs['REF_MenuTree'].getHalfCheckedKeys()
        checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys)
        return checkedKeys
      },
      getBtnCheckedKeys(nodes, btnList = []) {
        nodes.forEach((node) => {
          if (node.children && node.children.length > 0) {
            this.getBtnCheckedKeys(node.children, btnList)
          } else {
            if (node.btnPermissions) {
              node.btnPermissions.forEach((btnNode) => {
                if (btnNode.checked) {
                  btnList.push(btnNode.id)
                }
              })
            }
          }
        })
        return btnList
      },
      async save() {
        const menuList = this.getAllCheckedKeys()
        const btnList = this.getBtnCheckedKeys(this.menuTree)
        console.log('menuList', menuList)
        console.log('btnList', btnList)
        // const { msg } = await doEdit()
        // this.$baseMessage(msg, 'success')
        // this.$emit('fetch-data')
        // this.close()
      },
    },
  }
</script>
<style lang="scss" scoped>
  .custom-tree-node {
    ::v-deep {
      .el-checkbox {
        margin-right: 15px;
      }
    }
  }
</style>
