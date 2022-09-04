<template>
  <div class="chatroom">
    <p v-html="appname"></p>
    <Chatroom v-bind:name="name"/>
    <Chatroom v-bind:text="text"/>
    <Chatroom v-bind:author="author"/>
    <Chatroom v-bind:dark="dark"/>
  </div>
</template>

<script>
import Chatroom from '@/components/Chatroom.vue'

export default {
  name: 'ChatroomPage',
  components: {
    Chatroom
  },
  data() {
    return {
      name: "Yuto",
      text:"xxxxx",
      author:"author",
      dark:"dark"
    };
  }
}
</script>
<script setup>//定数表示
  const appname = '<h2>Chat App</h2>';
</script>
<style>

</style>