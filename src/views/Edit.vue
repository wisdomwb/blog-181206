<template>
  <div class="edit">
    <Row class="wrapper">
      <Col
        span="4"
        class="col0"
      >
      <div class="cancel">
        <Button
          type="error"
          ghost
          shape='circle'
          :size="'large'"
          long
        >返回</Button>
      </div>
      <div class="create-category">
        +新建分类
      </div>
      <Menu
        class="categories"
        theme='dark'
        :active-name='categories[0].name'
        @on-select='clickCategory'
      >
        <MenuItem
          v-for="item in categories"
          :key="item.name"
          :name="item.name"
        >
        <div class="item-content">
          <span>{{ item.name }}</span>
          <Dropdown
            placement="bottom-end"
            @on-click='clickCategorySetItem'
          >
            <Icon
              type="md-settings"
              :class="{ show: selectedCategory===item.name }"
              class="setting"
              @click="clickSet"
            />
            <DropdownMenu
              slot="list"
              class="category-options"
            >
              <DropdownItem name='mod'>
                <Icon type="ios-create-outline" />
                修改分类
              </DropdownItem>
              <DropdownItem name='del'>
                <Icon type="ios-trash-outline" />
                删除分类
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        </MenuItem>
      </Menu>
      </Col>
      <Col
        span="6"
        class="col1"
      >
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
import { Menu, MenuItem, Dropdown, DropdownMenu, DropdownItem, Row, Col, Icon, Button } from 'iview'
export default {
  name: 'Edit',
  components: {
    Menu,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Icon,
    Button,
  },
  data() {
    return {
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
      },],
      categoryName: '',
      selectedCategory: '前端'
    }
  },
  methods: {
    clickSet(name) {
      console.log(name)
    },
    clickCategorySetItem(name) {
      console.log(name)
      if (name === 'del') {
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
        this.categoryName = this.selectedCategory
        this.$Modal.confirm({
          title: '请输入新分类名',
          render: (h) => {
            return h('Input', {
              props: {
                value: this.categoryName,
                autofocus: true,
              },
              on: {
                input: (val) => {
                  this.categoryName = val;
                }
              }
            })
          }
        })
      }
    },
    clickCategory(name) {
      this.selectedCategory = name
    }
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
      .cancel {
        padding: 30px 18px 5px;
        text-align: center;
      }
      .create-category {
        padding: 0 15px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      .categories {
        position: relative;
        z-index: 0;
        .ivu-menu-item {
          z-index: auto;
        }
        .item-content {
          .ivu-dropdown {
            float: right;
            .setting {
              display: none;
              &.show {
                display: inline-block;
              }
            }
          }
        }
      }
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

