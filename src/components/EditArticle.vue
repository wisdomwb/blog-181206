<template>
  <div class="edit-article">

  </div>
</template>

<script>

import { } from 'iview'
import documentOkSrc from '@/assets/document_ok.svg'
import documentSrc from '@/assets/document.svg'
import { formatDate } from '@/utils/utils'

export default {
  name: 'EditArticles',
  components: {

  },
  data() {
    return {
    }
  },
  methods: {
    clickSet(name) {
      console.log(name)
    },
  }
}
</script>
<style lang="less" scoped>
.edit-article {
}
</style>
