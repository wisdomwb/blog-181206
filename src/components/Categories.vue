<template>
  <div class="categories">
    <h4>分类</h4>
    <div>
      <div
        v-for="item in content"
        :key='item.name'
        class="item"
      >
        {{ item.name }} <span>({{ item.amount }})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    content: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.categories {
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  h4 {
    color: #aaa;
  }
  .item {
    display: inline-block;
    width: 50%;
    & > span {
      color: #aaa;
    }
  }
}
</style>
