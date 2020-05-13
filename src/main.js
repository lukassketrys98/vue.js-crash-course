import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import routes from './routes'

 //for http requests
Vue.prototype.$http = axios;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});





//custom directives
Vue.directive("rainbow", {
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth = "1000px"; 
    }
    else if(binding.value == "narrow"){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == "column"){
      el.style.background ="lightgreen";
      el.style.padding ='20px';
    }
  }
})

//filters

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase()
})

Vue.filter('snippet', function(value){
  return value.slice(0,100) +
   "...";
  
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
