import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  template: '<App/>'
})