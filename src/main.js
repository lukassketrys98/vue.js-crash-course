import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.prototype.$http = axios;
 //for http requests
 





new Vue({
  el: '#app',
  render: h => h(App)
})
