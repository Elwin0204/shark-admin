<template>
  <div class="upload-container">
    <el-divider content-position="left">演示环境可能无法模拟上传</el-divider>
    <sk-upload
      ref="skUpload"
      url="/upload"
      name="file"
      :limit="50"
      :size="2"
    ></sk-upload>
    <el-button type="primary" @click="handleShow({ key: 'value' })">
      模拟上传
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'Upload',
    data() {
      return {}
    },
    methods: {
      handleShow(data) {
        this.$refs['skUpload'].handleShow(data)
      },
    },
  }
</script>
