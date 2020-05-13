<template>
  <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form v-if="submitted == false">
          <label>Blog Title:</label>
          <input type="text" required v-model.lazy="blog.title">
            <label>Blog Content</label>
          <textarea v-model.lazy="blog.content"></textarea>
          <div id="checkboxes">
          <label>Ninjas</label>
          <input type="checkbox" value = "ninjas" v-model="blog.categories">
          <label>Wizards</label>
          <input type="checkbox" value = "wizards" v-model="blog.categories">
          <label>Marios</label>
          <input type="checkbox" value = "marios" v-model="blog.categories">
          <label>Cheese</label>
          <input type="checkbox" value = "cheese" v-model="blog.categories">
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
          <option :key="author" v-for ="author in authors">{{author}}</option>
      </select>

      <button v-on:click.prevent="post">Add Blog</button>
      </form>
    <div v-if="submitted == true">Thanks for adding your post</div>
      

      <div id="preview">
          <h3>Preview blog</h3>
          <p>Blog title: {{blog.title}} </p>
          <p>Blog content: </p>
          <p style="white-space: pre">{{blog.content}}</p>
          <p>Blog categories:</p>
          <ul>
              <li :key="cat" v-for="cat in blog.categories">{{cat}}</li>
          </ul>
          <p>Author: {{blog.author}}</p>
      </div>
      
  </div>
</template>

<script>
export default {

  data () {
    return {
       blog:{
            title: '',
            content: '',
            categories: [],
            author: ""
       },
       authors: ["Lukas", "DEVY", "Lisbeth"],
        submitted: false
    }
  },
    methods: {
     
      post: function() {
        const axios = require('axios');
        //where and what we want to sent
        //making a post request
          axios.post('https://jsonplaceholder.typicode.com/posts',{
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(data =>  { //when its completed, do that
        console.log(data);
        this.submitted = true;
      })
      }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#chechboxes input{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label{
    display: inline-block;
}
</style>
