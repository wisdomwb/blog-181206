<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
        >
          <div class="layout-logo">
            weizhen的个人博客
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate" />
            登录
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad" />
            写文章
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <RouterView />
      </Content>
      <Footer class="layout-footer-center">
        ---@@---
      </Footer>
    </Layout>
  </div>
</template>

<script>
import { Layout, Header, Menu, MenuItem, Icon, Content, Card, Footer, Breadcrumb, } from 'iview'
export default {
  name: 'CommonLayout',
  components: {
    Layout,
    Header,
    Menu,
    MenuItem,
    Icon,
    Content,
    Card,
    Footer,
    Breadcrumb,
  },
  props: {}
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  /* width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px; */
  float: left;
  position: relative;
  /* top: 15px; */
  left: 20px;
  color: #fff;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>