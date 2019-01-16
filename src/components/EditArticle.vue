<template>
  <div class="edit-article">
    <div class="title">
      <Input
        v-model="title"
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
      title: ''
    }
  },
  mounted() {
    let simplemde = new SimpleMDE({
      element: document.getElementById('editArticleTextarea'),
      toolbar: ["quote", "italic", "strikethrough", "heading", "heading-smaller", "heading-bigger", "heading-1", "heading-2", "heading-3", "code", "quote", "unordered-list", "ordered-list", "clean-block", "link", "image", "table", "horizontal-rule", "preview", {
        name: "side-by-side",
        // action: this.clickSideBySide,
        action: SimpleMDE.toggleSideBySide,
        className: "fa fa-columns no-disable no-mobile",
        title: "Toggle Side by Side",
      }, {
          name: "fullscreen",
          // action: this.clickFullScreen,
          action: SimpleMDE.toggleFullScreen,
          className: "fa fa-arrows-alt no-disable no-mobile",
          title: "Toggle Fullscreen",
        }, "guide"]
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
}
</style>
