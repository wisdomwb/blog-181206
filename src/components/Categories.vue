<template>
  <div class="categories">
    <h4>分类</h4>
    <div>
      <div
        v-for="item in content"
        :key='item.name'
        class="item"
      >
        <router-link to='/category/123'>
          {{ item.name }} <i>({{ item.amount }})</i>
        </router-link>
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
    i {
      font-style: normal;
      color: #aaa;
    }
  }
}
</style>
