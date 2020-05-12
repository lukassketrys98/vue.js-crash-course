<template>
  <div id="app">
    <!-- passing out html template using slots-->
    <FormHelper>
      <!-- <h1 slot = "title">{{title}}</h1>
      <p slot = "text">I AM THE paragraph TEXT FROM THE SLOT</p> -->

      <!-- CIA REALIAI PASSINI DATA KURI ATSIRAS TAM TEMPLEITE -->
        <div slot ="form-header">
          <h3>This is the title of the form</h3>
          <p>Information of the form</p>
        </div>
        <div slot ="form-fields">
          <input type="text" placeholder="name" required>
          <input type="password" placeholder="password" required>
        </div>
        <div slot ="form-controls">
          <button v-on:click="handleSubmit">Submit</button>
        </div>
    </FormHelper>
  </div>
</template>

<script>

import formHelper from './components/formHelper.vue'
export default {
  components:{
    'FormHelper': formHelper
  },
  name: 'app',
  data () {
    return {
        title: "I am a dynamic slot title"
    
    }
  }
}
</script>

<style>

</style>
