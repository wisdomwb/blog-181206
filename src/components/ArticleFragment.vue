<template>
  <div class="article-fragment">
    <div class="txt">
      <h3>{{ article.title }}</h3>
      <div class="content">{{ article.content }}</div>
      <div>
        <div class="view-times">
          <Icon type="md-eye" /><span>{{ article.viewTimes }}</span>
        </div>
        <span class="time">{{ article.lastModTime | formatDate }}</span>
      </div>
    </div>
    <div class="img-wrapper">
      <img
        src="../assets/WechatIMG310.jpeg"
        alt=""
      >
    </div>
  </div>
</template>
<script>
import { Layout, Content, Sider, Icon } from 'iview';
import { formatDate } from '@/utils/utils'
export default {
  name: "ArticleFragment",
  components: {
    Icon
  },
  props: {
    article: {
      type: Object,
      required: true,
      default: function () {
        return {
          title: '',
          content: '',
          viewTimes: 0,
          lastModTime: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-fragment {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  padding: 5px 0;
  .txt {
    h3 {
      margin: 10px 0;
    }
    .content {
      margin-bottom: 5px;
    }
    .view-times {
      display: inline-block;
      margin-right: 5px;
      & > i {
        margin-right: 5px;
      }
    }
  }
  .img-wrapper {
    flex: 0 0 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    img {
      width: 100%;
    }
  }
}
</style>

