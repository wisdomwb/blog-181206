<template>
  <div class="home">
    <Layout>
      <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <ArticleFragment
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </Content>
      <Sider
        hide-trigger
        :style="sideStyle"
      >
        <Profile :content='profile' />
        <Tags :content='tags' />
        <Categories :content='categories' />
      </Sider>
    </Layout>
  </div>
</template>

<script>
import { Layout, Sider, Content } from 'iview'
import ArticleFragment from '@/components/ArticleFragment.vue'
import Profile from '@/components/Profile.vue'
import Tags from '@/components/Tags.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'Home',
  components: {
    Layout,
    Sider,
    Content,
    ArticleFragment,
    Profile,
    Tags,
    Categories
  },
  data() {
    return {
      sideStyle: {
        background: '#fff',
        flex: '0 0 300px',
        width: '300px',
        minWidth: '300px',
        maxWidth: '300px'
      },
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
      profile: '拥有11年开发经验的全栈开发者，热爱编程，热爱生活，热爱折腾。曾任职于FIS、IBM等国际知名企业，从事金融业、零售业相关的大数据分析系统的研发工作；同时拥有多次互联网创业经历，目前为上海默碟科技创始人。在技术方面涉猎广泛，全栈开发，并拥有丰富的系统架构经验。',
      tags: [{
        name: 'nodejs',
        amount: 10
      }, {
        name: 'react',
        amount: 3
      }, {
        name: 'antdesign',
        amount: 2
      }, {
        name: 'express',
        amount: 3
      }, {
        name: 'koa',
        amount: 6
      }, {
        name: 'mongodb',
        amount: 20
      }],
      categories: [{
        name: '前端',
        amount: 10
      }, {
        name: '服务端',
        amount: 3
      }, {
        name: '数据库',
        amount: 2
      }, {
        name: '设计',
        amount: 1
      },]
    }
  },
  methods: {

  },
  created: function () {
    console.log('created')
  }
}
</script>

