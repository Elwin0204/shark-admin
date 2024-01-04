<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="700px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="auto">
      <el-row type="flex" :gutter="20">
        <el-col :span="12">
          <el-form-item label="菜单名称" prop="title">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="菜单编码" prop="title">
            <el-input v-model="form.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="id" prop="id">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="parentId" prop="parentId">
            <el-input
              v-model="form.parentId"
              autocomplete="off"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="路由地址" prop="path">
            <el-input v-model="form.path" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="组件路径" prop="component">
            <el-input v-model="form.component" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input-number
              v-model="form.sort"
              controls-position="right"
              :min="0"
              autocomplete="off"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否隐藏" prop="hidden">
            <el-select v-model="form.hidden" placeholder="请选择">
              <el-option
                v-for="item in hiddenOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图标" prop="icon">
            <el-input v-model="form.icon" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否固定" prop="affix">
            <el-select v-model="form.affix" placeholder="请选择">
              <el-option
                v-for="item in affixOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="面包屑" prop="breadcrumb">
            <el-select v-model="form.breadcrumb" placeholder="请选择">
              <el-option
                v-for="item in breadcrumbOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否无缓存" prop="noCache">
            <el-select v-model="form.noCache" placeholder="请选择">
              <el-option
                v-for="item in noCacheOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否禁用" prop="noCache">
            <el-select v-model="form.disabled" placeholder="请选择">
              <el-option
                v-for="item in disabledOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { doEdit } from '@/api/menuManagement'

  export default {
    name: 'EditMenu',
    data() {
      return {
        form: {
          title: '',
          code: '',
          id: '',
          parentId: '',
          path: '',
          component: '',
          sort: '',
          hidden: '',
          type: '',
          icon: '',
          affix: '',
          breadcrumb: '',
          noCache: '',
        },
        rules: {
          title: [
            { required: true, trigger: 'blur', message: '请输入菜单名称' },
          ],
          code: [
            { required: true, trigger: 'blur', message: '请输入菜单编码' },
          ],
          id: [{ required: true, trigger: 'blur', message: '请输入id' }],
          path: [
            { required: true, trigger: 'blur', message: '请输入路由地址' },
          ],
          component: [
            { required: true, trigger: 'blur', message: '请输入组件路径' },
          ],
          sort: [{ required: true, trigger: 'blur', message: '请输入排序' }],
          hidden: [
            { required: true, trigger: 'change', message: '请选择是否隐藏' },
          ],
          type: [{ required: true, trigger: 'change', message: '请选择类型' }],
          affix: [
            { required: true, trigger: 'change', message: '请选择是否固定' },
          ],
          breadcrumb: [
            {
              required: true,
              trigger: 'change',
              message: '请选择面包屑是否显示',
            },
          ],
          noCache: [
            { required: true, trigger: 'change', message: '请选择是否不缓存' },
          ],
        },
        title: '',
        dialogFormVisible: false,
        hiddenOptions: [
          {
            label: '是',
            value: true,
          },
          {
            label: '否',
            value: false,
          },
        ],
        typeOptions: [
          {
            label: '菜单',
            value: 'menu',
          },
          {
            label: '页面',
            value: 'page',
          },
          {
            label: '按钮',
            value: 'button',
          },
        ],
        affixOptions: [
          {
            label: '是',
            value: true,
          },
          {
            label: '否',
            value: false,
          },
        ],
        breadcrumbOptions: [
          {
            label: '否',
            value: true,
          },
          {
            label: '是',
            value: false,
          },
        ],
        noCacheOptions: [
          {
            label: '是',
            value: true,
          },
          {
            label: '否',
            value: false,
          },
        ],
        disabledOptions: [
          {
            label: '是',
            value: true,
          },
          {
            label: '否',
            value: false,
          },
        ],
        action: '',
      }
    },
    created() {},
    methods: {
      showEdit(action, row) {
        if (action === 'add') {
          this.action = 'add'
          this.title = '新增'
          this.form = Object.assign({}, { parentId: row.id })
        } else if (action === 'edit') {
          this.action = 'edit'
          this.title = '编辑'
          this.form = Object.assign({}, row)
        }
        this.dialogFormVisible = true
      },
      close() {
        this.$refs['form'].resetFields()
        this.form = this.$options.data().form
        this.dialogFormVisible = false
      },
      save() {
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.form)
            this.$baseMessage(msg, 'success')
            this.$emit('fetch-data')
            this.close()
          } else {
            return false
          }
        })
      },
    },
  }
</script>
