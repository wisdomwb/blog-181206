<template>
  <div class="tags">
    <h4>标签</h4>
    <div>
      <div
        v-for="item in content"
        :key='item.name'
        class="item"
      >
        <router-link to='/tag/123'>
        {{ item.name }} <i>({{ item.amount }})</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    content: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    clickTag() {
      this.$router.push(`/tag/123`)
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
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
