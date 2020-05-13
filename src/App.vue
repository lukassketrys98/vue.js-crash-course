<template>
  <div id="app">
   <!-- <AddBlog/> -->
   <ShowBlogs/>
   <ListBlogs/>
  </div>
</template>

<script>

import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';

export default {
  name: 'app',
  components:{
  'AddBlog': addBlog,
  'ShowBlogs': showBlogs ,
  'ListBlogs': listBlogs ,
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
