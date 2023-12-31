<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="500px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="编号" prop="id">
        <el-input
          v-model.trim="form.id"
          :disabled="fieldConfig.id.disabled"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <el-input v-model.trim="form.avatar" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="username">
        <el-input v-model.trim="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model.trim="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="MAN">男</el-radio>
          <el-radio label="WOMAN">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input-number
          v-model.trim="form.age"
          controls-position="right"
          :min="1"
          :max="200"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="签名" prop="signature">
        <el-input
          v-model.trim="form.signature"
          type="textarea"
          :rows="2"
          placeholder="请输入签名"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="权限" prop="permissions">
        <el-select
          v-model="form.permissions"
          multiple
          filterable
          default-first-option
          placeholder="请选择权限"
        >
          <el-option
            v-for="item in permissionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model.trim="form.status" placeholder="请选择状态">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { doEdit } from '@/api/userManagement'
  import dayjs from 'dayjs'
  export default {
    name: 'UserManagementEdit',
    data() {
      return {
        form: {
          id: '',
          avatar: '',
          username: '',
          password: '',
          email: '',
          gender: '',
          age: '',
          signature: '',
          permissions: [],
          datatime: '',
          status: '',
        },
        fieldConfig: {
          id: {
            disabled: false,
          },
        },
        rules: {
          id: [{ required: true, trigger: 'blur', message: '请输入id' }],
          avatar: [
            { required: true, trigger: 'blur', message: '请输入头像url' },
          ],
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名' },
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' },
          ],
          email: [{ required: true, trigger: 'blur', message: '请输入邮箱' }],
          gender: [{ required: true, trigger: 'blur', message: '请选择性别' }],
          age: [{ required: true, trigger: 'blur', message: '请输入年龄' }],
          signature: [
            { required: true, trigger: 'blur', message: '请输入签名' },
          ],
          permissions: [
            { required: true, trigger: 'blur', message: '请选择权限' },
          ],
          status: [{ required: true, trigger: 'blur', message: '请选择状态' }],
        },
        statusOptions: [
          {
            label: '启用',
            value: 'Y',
          },
          {
            label: '禁用',
            value: 'N',
          },
        ],
        permissionOptions: [
          {
            label: '管理员',
            value: 'admin',
          },
          {
            label: '权限1',
            value: 'editor',
          },
        ],
        title: '',
        action: '',
        dialogFormVisible: false,
      }
    },
    created() {},
    methods: {
      showEdit(row) {
        if (!row) {
          this.title = '新增'
          this.action = 'add'
          this.fieldConfig.id.disabled = false
        } else {
          this.title = '编辑'
          this.action = 'edit'
          this.form = Object.assign({}, row)
          this.fieldConfig.id.disabled = true
        }
        this.dialogFormVisible = true
      },
      close() {
        this.$refs['form'].resetFields()
        this.form = this.$options.data().form
        this.dialogFormVisible = false
      },
      checkExisted(userList, target) {
        return userList.find((item) => item.id === target.id) ? true : false
      },
      save() {
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            this.form.datatime = dayjs().format('YYYY-MM-DD HH:mm:ss')
            const userList = (await this.$dbInstance.getItem('userList')) || []
            if (this.action === 'add') {
              if (this.checkExisted(userList, this.form)) {
                this.$baseMessage('该用户已存在', 'error')
                return false
              }
              this.form.uid = this.$genid.NextId()

              const newUserList = this.$baseLodash.unionWith(
                userList,
                [this.form],
                this.$baseLodash.isEqual
              )
              await this.$dbInstance.setItem('userList', newUserList)
            } else if (this.action === 'edit') {
              const index = userList.findIndex(
                (item) => item.id === this.form.id
              )
              userList.splice(index, 1, this.form)
              await this.$dbInstance.setItem('userList', userList)
            }

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
