<template>
    <div id ="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <li v-for="cat in blog.categories">{{cat}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created(){
      
    const myRequest = new Request('https://my-database-7b462.firebaseio.com/posts/' + this.id +'.json');

fetch(myRequest).then( response =>  response.json()).then( response => {
    
    this.blog = response;
  });
   
  
          
        
    }
}
 

</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
  
</style>
