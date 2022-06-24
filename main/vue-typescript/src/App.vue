<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

//export default {
//  name: 'App',
//  components: {
//    HelloWorld
//  }
//}
</script>

<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Home/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
