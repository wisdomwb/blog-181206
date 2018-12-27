<template>
  <div class="tag">
    <Card>
      <h1>nodejs</h1>
      <ArticleFragment
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </Card>
  </div>
</template>

<script>
import { Icon, Card } from 'iview'
import ArticleFragment from '@/components/ArticleFragment.vue'

export default {
  name: 'Tag',
  components: {
    Card,
    ArticleFragment
  },
  data() {
    return {
      articles: [{
        title: '如何使用云存储来存取及优化图片资源',
        content: '在日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，还需要生成不同尺寸的缩略图...',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: ''
      }, {
        title: '如何使用云存储来存取及优化图片资源',
        content: '在日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，还需要生成不同尺寸的缩略图...',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: ''
      }, {
        title: '如何使用云存储来存取及优化图片资源',
        content: '在日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，还需要生成不同尺寸的缩略图...',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: ''
      }],
    }
  },
  created: function () {
    console.log('created')
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.tag {
  width: 800px;
  margin: 20px auto;
  min-height: 500px;
  h1 {
    display: inline-block;
    margin: 5px 0 20px;
    border-bottom: 1px solid #f0f0f0;
  }
}
</style>


