<template>
  <div class="profile">
    <h4>个人介绍</h4>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.profile {
  h4 {
    color: #aaa;
  }
}
</style>
