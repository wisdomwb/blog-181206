import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import { formatDate } from '@/utils/utils'
import { Modal, Message, Input, Form, FormItem, Row, Col, Icon } from 'iview'
import '@fortawesome/fontawesome-free/css/all.min.css'


Vue.filter('formatDate', (time, format = 'yyyy-MM-dd hh:mm') => {
  if (!time) { return '' }
  return formatDate(new Date(time), format)
})

Vue.component('Input', Input)
Vue.component('Modal', Modal)
Vue.prototype.$Modal = Modal
Vue.component('Message', Message)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Icon', Icon)

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  template: '<App/>'
})