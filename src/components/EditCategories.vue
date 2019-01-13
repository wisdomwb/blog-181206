<template>
  <div class="edit-categories">
    <div class="cancel">
      <Button
        type="error"
        ghost
        shape='circle'
        :size="'large'"
        long
      >返回</Button>
    </div>
    <div
      class="create-category"
      @click='isShowNewCategory=true'
    >
      +新建分类
    </div>
    <transition name='new-category'>
      <Form
        v-show="isShowNewCategory"
        :model='newCategory'
        class="new-category-form"
      >
        <FormItem>
          <Input
            v-model="newCategory.input"
            placeholder="请输入分类名..."
          />
        </FormItem>
        <FormItem>
          <Button type="primary">提交</Button>
          <Button
            style="margin-left: 8px"
            @click="handleCancelNewCategory"
          >取消</Button>
        </FormItem>
      </Form>
    </transition>
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
            v-show="selectedCategory===item.name"
            type="md-settings"
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
              <Icon type="md-trash" />
              删除分类
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>

import { Menu, MenuItem, Dropdown, DropdownMenu, DropdownItem, Row, Col, Icon, Button } from 'iview'

export default {
  name: 'EditCategories',
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
      selectedCategory: '前端',
      newCategory: {
        input: ''
      },
      isShowNewCategory: false,//是否显示新增分类
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
    //点击新增分类
    clickCategory(name) {
      this.selectedCategory = name
    },
    //取消新增分类
    handleCancelNewCategory() {
      this.isShowNewCategory = false
      this.newCategory = { input: '' }
    },
  }
}
</script>
<style lang="less" scoped>
.edit-categories {
  position: relative;
  height: 100%;
  overflow-y: auto;
  z-index: 100;
  .cancel {
    padding: 30px 18px 5px;
    text-align: center;
  }
  .create-category {
    padding: 0 15px;
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .new-category-form {
    padding: 0 20px;
  }
  // 定义进入过渡生效时的状态,定义离开过渡生效时的状态
  .new-category-enter-active,
  .new-category-leave-active {
    transition: all 0.5s;
  }
  //定义进入过渡的开始状态,定义离开过渡的结束状态
  .new-category-enter,
  .new-category-leave-to {
    height: 0;
  }
  //定义进入过渡的结束状态,定义离开过渡的开始状态
  .new-category-enter-to,
  .new-category-leave {
    height: 114px;
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
        }
      }
    }
  }
}
</style>
