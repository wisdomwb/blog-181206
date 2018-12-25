import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import { formatDate } from '@/utils/utils';

Vue.filter('formatDate', (time, format = 'yyyy-MM-dd hh:mm') => {
  if (!time) { return '' }
  return formatDate(new Date(time), format)
})

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  template: '<App/>'
})