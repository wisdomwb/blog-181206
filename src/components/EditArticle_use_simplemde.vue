<template>
  <div class="edit-article">
    <div class="title">
      <Input
        v-model="article.title"
        size="large"
        placeholder="请输入标题"
        clearable
        class="title-input"
      />
    </div>
    <textarea id='editArticleTextarea'>

    </textarea>
  </div>
</template>

<script>

import { } from 'iview'
import documentOkSrc from '@/assets/document_ok.svg'
import documentSrc from '@/assets/document.svg'
import { formatDate } from '@/utils/utils'
import SimpleMDE from 'simplemde'
import '../../node_modules/simplemde/dist/simplemde.min.css'

export default {
  name: 'EditArticles',
  components: {

  },
  data() {
    return {
      article: {
        id: 'abc123a',
        title: '如何使用云存储来存取及优化图片资源',
        content: '在日常开发中，不免会遇到需要实现图片上传与展示的需求。比如一个文章发布系统，我们通常会开发图片上传功能，让用户可以为自己的文章提供配图；而且图片上传后，还需要生成不同尺寸的缩略图...',
        viewTimes: 5,
        lastModTime: 1545355479433,
        img: '',
        isPublished: false,
      }
    }
  },
  mounted() {
    let simplemde = new SimpleMDE({
      element: document.getElementById('editArticleTextarea'),
      initialValue: this.article.content,
      spellChecker: false,
      status: false,
      hideIcons: ['side-by-side', 'fullscreen']
    })
  },
  methods: {
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
.edit-article {
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
}
</style>
<style lang="less">
.edit-article {
  .title {
    .title-input {
      input {
        border: none;
        &:focus {
          box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
        }
      }
    }
  }
  .editor-toolbar {
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    &:before,
    &:after {
      margin: 0;
    }
  }
  .CodeMirror {
    height: 500px;
    font-size: 14px;
    border-left: 0;
    border-right: 0;
  }
}
</style>
