<template>
  <div class="edit">
    <Row class="wrapper">
      <Col
        span="4"
        class="col0"
      >
      <EditCategories />
      </Col>
      <Col
        span="6"
        class="col1"
      >
      <EditArticles />
      </Col>
      <Col
        span="14"
        class="col2"
      >
      </Col>
    </Row>
  </div>
</template>

<script>
import { Row, Col, Icon, Button } from 'iview'
import EditCategories from '@/components/EditCategories.vue'
import EditArticles from '@/components/EditArticles.vue'

export default {
  name: 'Edit',
  components: {
    Row,
    Col,
    Icon,
    Button,
    EditCategories,
    EditArticles
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.edit {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  .wrapper {
    height: 100%;
    .col0 {
      position: relative;
      height: 100%;
      overflow-y: auto;
      background-color: #404040;
      color: #f2f2f2;
      z-index: 100;
    }
    .col1 {
      height: 100%;
      border-right: 1px solid #d9d9d9;
    }
    .col2 {
      height: 100%;
      border-right: 1px solid #d9d9d9;
    }
  }
}
</style>

