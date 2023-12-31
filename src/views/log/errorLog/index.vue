<template>
  <div class="errorLog-container">
    <el-divider content-position="left">
      这里会在navbar上模拟一个控制台错误日志
    </el-divider>
    <el-button type="primary" @click="handleError">点击模拟一个错误</el-button>
    <el-table :data="errorLogs">
      <el-table-column label="报错路由">
        <template slot-scope="{ row }">
          <a :href="row.url" target="_blank">
            <el-tag type="success">{{ row.url }}</el-tag>
          </a>
        </template>
      </el-table-column>
      <el-table-column label="错误信息">
        <template slot-scope="{ row }">
          <el-tag type="danger">{{ decodeUnicode(row.err.message) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="错误详情" width="120">
        <template slot-scope="scope">
          <el-popover placement="top-start" trigger="hover">
            <div style="color: red">
              {{ scope.row.err.stack }}
            </div>
            <el-button slot="reference">查看</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column width="380" label="操作">
        <template slot-scope="{ row }">
          <a
            v-for="(item, index) in searchList"
            :key="index"
            :href="item.url + decodeUnicode(row.err.message)"
            target="_blank"
          >
            <el-button style="margin-left: 5px" type="primary">
              <v-icon name="search" />
              {{ item.title }}
            </el-button>
          </a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ErrorLog',
    data() {
      return { show: false }
    },
    computed: {
      ...mapGetters({
        errorLogs: 'errorLog/errorLogs',
      }),
    },
    methods: {
      handleError() {
        throw new Error('测试错误日志')
      },
      decodeUnicode(str) {
        str = str.replace(/\\/g, '%')
        str = unescape(str)
        str = str.replace(/%/g, '\\')
        str = str.replace(/\\/g, '')
        return str
      },
    },
  }
</script>
