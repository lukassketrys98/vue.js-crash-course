<template>
<!-- div custom directive:argument = "value" -->
  <div v-theme ="'wide'" id = "show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" v-model = "search" placeholder = "Search Blogs">
      <div v-for= "blog in filteredBlogs" class ="single-blog">
          
          <!-- adding custom directives v-(myname) -->
         <router-link v-bind:to="'/blog/' + blog.id">
         <h1 v-rainbow>{{blog.title | to-uppercase}}</h1> 
         </router-link>
         <!-- adding filters -->
         <article>{{blog.content | snippet }}</article>
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
    
  
const myRequest = new Request('https://my-database-7b462.firebaseio.com/posts.json');

fetch(myRequest).then( response =>  response.json()).then( response => {
    var blogsArray = [];
    for(let key in response){
        response[key].id = key;
        blogsArray.push(response[key]);
    }
    this.blogs = blogsArray;
  });
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

a{
    text-decoration: none;
}
  
</style>
