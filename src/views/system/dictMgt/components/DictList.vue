<template>
  <div class="list-box" @click="handleClick">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="list-item"
      :style="{ background: item.checked ? '#ebeef5' : '' }"
    >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DictList',
    props: {
      list: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        oldItem: null,
      }
    },
    created() {},
    methods: {
      handleClick(e) {
        const listItem = e.target.closest('.list-item')
        if (listItem) {
          const index = Array.from(listItem.parentNode.children).indexOf(
            listItem
          )
          const newItem = this.list[index]
          if (this.oldItem != newItem) {
            if (this.oldItem) this.$set(this.oldItem, 'checked', false)
            this.oldItem = newItem
            this.$set(newItem, 'checked', true)
            this.$emit('change', newItem)
          }
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .list-box {
    padding: 12px 0;
    .list-item {
      padding: 12px 8px;
      border-radius: 4px;
      &:hover {
        cursor: pointer;
        background: #ebeef5;
      }
    }
  }
</style>
