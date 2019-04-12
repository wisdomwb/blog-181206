<template>
  <div class="article">
    <Card>
      <h3>{{ article.title }}</h3>
      <div class="info">
        <div class="view-times">
          <Icon type="md-eye" /><span>{{ article.viewTimes }}</span>
        </div>
        <span class="time">
          {{ article.lastModTime | formatDate }}
        </span>
        <Icon
          type="md-create"
          class="mod"
          title="编辑"
          @click="clickMod"
        />
      </div>
      <div class="content">
        {{ article.content }}
      </div>
    </Card>
  </div>
</template>

<script>
import { Icon, Card } from 'iview'

export default {
  name: 'Article',
  components: {
    Icon,
    Card
  },
  data() {
    return {
      article: {
        title: '如何使用云存储来存取及优化图片资源',
        content: '在日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，还需要生成不同尺寸的缩略图.日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: ''
      },
    }
  },
  created: function () {
    console.log('created')
  },
  methods: {
    clickMod() {
      this.$router.push(`/edit`)
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  width: 800px;
  margin: 20px auto;
  min-height: 500px;
  .info {
    text-align: center;
    .view-times {
      display: inline-block;
      margin-right: 5px;
      & > i {
        margin-right: 5px;
      }
    }
    margin-bottom: 20px;
    .mod {
      margin-left: 25px;
      cursor: pointer;
    }
  }
  h3 {
    text-align: center;
    margin-bottom: 5px;
  }
}
</style>


