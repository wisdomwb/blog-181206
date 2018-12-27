<template>
  <div class="login">
    <div class="logo">
      logo
    </div>
    <Card class="main">
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="user">
          <Input
            v-model="formInline.user"
            type="text"
            placeholder="用户名"
          >
          <Icon
            slot="prepend"
            type="ios-person-outline"
          />
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            v-model="formInline.password"
            type="password"
            placeholder="密码"
          >
          <Icon
            slot="prepend"
            type="ios-lock-outline"
          />
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            class="submit"
            @click="handleSubmit('formInline')"
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import { Card, Form, FormItem, Input, Icon, Button } from 'iview'
export default {
  name: 'Login',
  components: {
    Card,
    Form,
    FormItem,
    Input,
    Icon,
    Button
  },
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #f1f1f1;
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .main {
    width: 400px;
    padding: 50px 50px 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .submit {
      width: 100%;
    }
  }
}
</style>

