<template>
  <div id="app">
    <!-- <FormOne/>
    <FormTwo/> -->
    <!-- keep alive does not delete components -->
    <keep-alive>
      <component v-bind:is ="component"></component>
    </keep-alive>
    <button v-on:click="component='FormOne'">Show form one</button>
    <button v-on:click="component='FormTwo'">Show form two</button>
  </div>
</template>

<script>

// import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components:{
    // 'FormHelper': formHelper,
    'FormOne': formOne,
    'FormTwo': formTwo
  },
  name: 'app',
  data () {
    return {
        title: "I am a dynamic slot title",
        component: 'FormOne'
    
    }
  }

}
</script>

<style>

</style>
