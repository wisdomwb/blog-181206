<template>
  <Row class="edit-preview">
    <Col span="12">
    <div class="title">
      <Input
        v-model="article.title"
        size="large"
        placeholder="请输入标题"
        class="title-input"
      />
    </div>
    <Row
      class="toolbar"
      type="flex"
      justify="space-between"
    >
      <Col class="col0">
      <Icon
        type="md-image"
        size="20"
        title='插入图片'
      />
      <Icon
        type="md-help-circle"
        size="20"
        title='Markdown语法参考'
      />
      </Col>
      <Col class="col1">
      <Icon
        custom='fa fa-save'
        size="18"
        title='保存'
      />
      <Icon
        custom='fa fa-columns'
        size="18"
        title='返回'
        @click='clickGoBack'
      />
      <span class="publish">
        <Icon
          custom='fa fa-share'
          size="20"
        />
        <span>
          发布文章
        </span>
      </span>
      </Col>
    </Row>
    <Input
      v-model="article.content"
      type="textarea"
    />
    <!-- <vue-markdown>{{ content }}</vue-markdown> -->
    </Col>
    <Col span="12">
    <div class="title">{{article.title}}</div>
    <div class="content">
      <vue-markdown>{{ article.content }}</vue-markdown>
    </div>
    </Col>
  </Row>

</template>

<script>

import { } from 'iview'
import documentOkSrc from '@/assets/document_ok.svg'
import documentSrc from '@/assets/document.svg'
import { formatDate } from '@/utils/utils'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'EditPreview',
  components: {
    VueMarkdown
  },
  data() {
    return {
      article: {
        id: 'abc123a',
        title: '如何使用云存储来存取及优化图片资源',
        content: '## content0 ## content1',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: '',
        isPublished: false,
      },
      content: `# qwerty`
    }
  },
  mounted() {

  },
  methods: {
    clickGoBack() {
      this.$router.back()
    },
    clickSideBySide() {
      alert('clickSideBySide')
    },
    clickFullScreen() {
      alert('clickFullScreen')
    },
    clickSet(name) {
      console.log(name)
    },
  }
}
</script>
<style lang="less" scoped>
.edit-preview {
  height: 100%;
  & > div {
    height: 100%;
  }
  & > div:first-child {
    display: flex;
    flex-flow: column;
    border-right: 1px solid #ccc;
    .title {
      .ivu-input-wrapper {
        input {
          border: none;
        }
      }
      .title-input {
        color: #f00;
        input {
          border: none;
        }
      }
    }
    .toolbar {
      background-color: #d9d9d9;
      font-size: 0;
      .col0,
      .col1 {
        display: flex;
      }
      .publish {
        display: inline-block;
        padding-right: 10px;
        font-size: 12px;
        .ivu-icon {
          padding-right: 0;
        }
        &:hover {
          color: #fff;
          background: #595959;
        }
      }
      .ivu-icon {
        padding: 10px;
        &:hover {
          color: #fff;
          background: #595959;
        }
      }
    }
    & > div:last-child {
      flex: auto;
    }
  }
  & > div:last-child {
    padding: 10px;
    background-color: #fcfaf2;
    .title {
      font-size: 26px;
      margin-bottom: 10px;
    }
  }
}
</style>
<style lang="less">
.edit-preview {
  .title {
    .title-input {
      input {
        font-size: 26px;
        border: none;
        &:focus {
          box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
        }
        margin: 10px 0;
      }
    }
  }
  & > div:nth-child(3) {
    flex: auto;
  }
  textarea.ivu-input {
    height: 100%;
    border: none;
    font-size: 18px;
    color: #333;
    padding: 10px;
  }
}
</style>
