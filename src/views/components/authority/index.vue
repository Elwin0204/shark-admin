<template>
  <div class="authority-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span>
          intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案)
        </span>
      </div>
      <div>
        <el-form>
          <el-form-item label="切换账号">
            <el-radio-group v-model="account" @input="handleChangeAuthority">
              <el-radio-button label="admin"></el-radio-button>
              <el-radio-button label="editor"></el-radio-button>
              <el-radio-button label="test"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="当前权限">
            {{ JSON.stringify(permissions) }}
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix">
        <span>按钮级权限演示</span>
      </div>
      <div>
        <el-button v-has="['admin']" type="primary">
          我是拥有["admin"]权限的按钮
        </el-button>
        <el-button v-has="['editor']" type="primary">
          我是拥有["editor"]权限的按钮
        </el-button>
        <el-button v-has="['test']" type="primary">
          我是拥有["test"]权限的按钮
        </el-button>
      </div>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix">
        <span>
          all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案)
        </span>
      </div>
      <div>
        settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种,
        由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { tokenTableName } from '@/config'
  import { getRouterList } from '@/api/router'

  export default {
    name: 'Authority',
    data() {
      return {
        account: '',
        tableData: [],
        res: [],
      }
    },
    computed: {
      ...mapGetters({
        username: 'user/username',
        permissions: 'user/permissions',
      }),
    },
    created() {
      this.fetchData()
    },
    mounted() {
      this.account = this.username
    },
    methods: {
      handleChangePermission() {
        localStorage.setItem(tokenTableName, `${this.account}-accessToken`)
        location.reload()
      },
      handleChangeAuthority() {
        localStorage.setItem(tokenTableName, `${this.account}-accessToken`)
        location.reload()
      },
      async fetchData() {
        const res = await getRouterList()
        this.tableData = res.data
        this.res = res
      },
    },
  }
</script>
