<template>
  <div class="edit-articles">
    <div
      class="create-article"
      @click='clickCreateArticle'
    >
      + 新建文章
    </div>
    <Menu
      class="articles"
      active-name='abc123a'
      @on-select='clickArticle'
      width='auto'
    >
      <MenuItem
        v-for="item in articles"
        :key="item.id"
        :name="item.id"
      >
      <div class="item-wrapper">
        <img
          :src="item.isPublished?documentOkSrc:documentSrc"
          :title='item.isPublished?"已发布":"未发布"'
          alt=""
        >
        <div class="item-info">
          <h3 class="title">{{ item.title }}</h3>
          <span
            class='content'
            :class="item.id!==selectedArticle.id&&'content-hidden'"
          >{{item.content}}</span>
        </div>
        <Dropdown
          placement="bottom-end"
          @on-click='clickArticleSetItem'
        >
          <Icon
            v-show="selectedArticle.id===item.id"
            type="md-settings"
            class="setting"
            @click="clickSet"
          />
          <DropdownMenu
            slot="list"
            class="category-options"
          >
            <DropdownItem
              name='mod'
              v-if="selectedArticle.isPublished"
            >
              <Icon type="md-checkmark" />
              已发布
            </DropdownItem>
            <DropdownItem
              name='mod'
              v-else
            >
              <Icon type="md-paper-plane" />
              直接发布
            </DropdownItem>
            <DropdownItem name='del'>
              <Icon type="md-trash" />
              删除文章
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>

import { Menu, MenuItem, Dropdown, DropdownMenu, DropdownItem, Icon } from 'iview'
import documentOkSrc from '@/assets/document_ok.svg'
import documentSrc from '@/assets/document.svg'
import { formatDate } from '@/utils/utils'

export default {
  name: 'EditArticles',
  components: {
    Menu,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Icon,
  },
  data() {
    return {
      articles: [{
        id: 'abc123a',
        title: '如何使用云存储来存取及优化图片资源',
        content: '在日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，还需要生成不同尺寸的缩略图...',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: '',
        isPublished: false,
      }, {
        id: 'abc123b',
        title: 'MVVM框架的搭建',
        content: '介绍完背景以及初衷之后，我们开始搭建MVVM的框架，这一部分我们进行简单的搭建，了解MVVM架构的基本结构。',
        viewTimes: 20,
        lastModTime: 1545355479434,
        img: '',
        isPublished: false,
      }, {
        id: 'abc123c',
        title: 'Django建立设备管理系统',
        content: '根据刘江博客CMDB之资产管理系统教程，按照models数据结构、views视图函数和template模板的顺序进行构建，形成一个MTV的完整结构。因为教程已经十分详细，有兴趣练手可直接看，这里区别一下2.0版本后不再使用url()函数，改用path()函数，在编写url.py文件时注意修改...',
        viewTimes: 5,
        lastModTime: 1545355479435,
        img: '',
        isPublished: true,
      }],
      documentOkSrc,
      documentSrc,
      selectedArticle: { id: 'abc123a' }
    }
  },
  methods: {
    clickSet(name) {
      console.log(name)
    },
    clickCategorySetItem(name) {
      console.log(name)
      if (name === 'del') {//删除
        this.$Modal.confirm({
          content: '<p>确定删除？</p>',
          onOk: () => {
            this.$Message.info('Clicked ok')
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel')
          }
        })
      } else {
        //发布
      }
    },
    //点击新建文章
    clickCreateArticle() {
      //test
      let newArticle = {
        id: 'abc123d',
        title: formatDate(new Date(), 'yyyy-MM-dd'),
        content: '',
        viewTimes: 0,
        lastModTime: new Date().getTime(),
        img: '',
        isPublished: false,
      }
      this.articles.unshift(newArticle)
    },
    //点击目录中的某篇文章
    clickArticle(id) {
      let found = this.articles.find(item => item.id === id)
      this.selectedArticle = found
    },
    //点击文章目录右侧设置
    clickArticleSetItem() {

    }
  }
}
</script>
<style lang="less" scoped>
.edit-articles {
  .create-article {
    line-height: 20px;
    font-weight: 400;
    padding: 20px 0 20px 25px;
    cursor: pointer;
    color: #595959;
  }
  .item-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-info {
      flex: auto;
      overflow: hidden;
      margin: 0 5px;
      & > i {
        top: 30px;
        left: 20px;
        width: 22px;
        height: 30px;
        background-size: auto auto;
        background-size: 250px;
      }
      .title,
      .content {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .content-hidden {
        visibility: hidden;
      }
    }
  }
}
</style>
