<template>
  <div id="app">
   <!-- <AddBlog/> -->
  </div>
</template>

<script>

// import addBlog from './components/addBlog';

export default {
  name: 'app',
  components:{
  // 'AddBlog': addBlog  
  },
  data () {
    return {
    
    }
  },
  mounted: function(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response));
  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Arial Semibold';
  }
</style>
