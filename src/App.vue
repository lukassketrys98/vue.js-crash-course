<template>
  <div id="app">
    <Header/>
   <router-view>

   </router-view>
   
  </div>
</template>

<script>

import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';
import header from './components/header';

export default {
  name: 'app',
  components:{
  'AddBlog': addBlog,
  'ShowBlogs': showBlogs ,
  'ListBlogs': listBlogs ,
  'Header': header 
  },
  data () {
    return {
    
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Arial Semibold';
  }
</style>
