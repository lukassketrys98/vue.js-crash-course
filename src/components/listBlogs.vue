<template>
<!-- div custom directive:argument = "value" -->
  <div v-theme ="'narrow'" id = "show-blogs">
      <h1>All Blog Titles</h1>
      <input type="text" v-model = "search" placeholder = "Search Blogs">
      <div v-for= "blog in filteredBlogs" class ="single-blog">
          <!-- adding custom directives v-(myname) -->
         <h1 v-rainbow>{{blog.title | to-uppercase}}</h1> 
         <!-- adding filters -->
         <article>{{blog.body | snippet }}</article>
      </div>
  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin'


export default {

  data () {
    return {
        blogs:[],
        search: ''
    }
  },
  methods: {

  },
  created(){
      const axios = require('axios');
      axios.get('https://jsonplaceholder.typicode.com/posts').then(responseData => {
          this.blogs = responseData.data.slice(0,10);
          console.log(this.blogs)
         
          
      })
  },
  computed: {
      
  },
  mixins:[
      searchMixin
  ],
//   register things localy
  filters:{
      'to-lowercase': function(value){
           return value.toLowerCase()
      }
        // toUppercase: removing string and making camel case
  },
//   directives:{
//       'rainbow': {
//         bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
//   }
}
</script>

<style scoped>

#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
input[type=text]{
    width: 100%;
    height: 40px;
    text-align: center;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
  
</style>
