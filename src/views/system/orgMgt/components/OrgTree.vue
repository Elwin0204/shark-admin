<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    @node-click="handleNodeClick"
  ></el-tree>
</template>

<script>
  export default {
    name: 'OrgTree',
    props: {
      data: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      }
    },
    created() {},
    methods: {
      handleNodeClick() {},
    },
  }
</script>
