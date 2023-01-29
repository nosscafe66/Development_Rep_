<template>
<div>
  <HeaderClass></HeaderClass>
  <BodyClass></BodyClass>
</div>
</template>
<script>
import HeaderClass from '../components/HeaderClass.vue'
import BodyClass from '../components/BodyClass.vue'
export default{
  name: 'Main',
  components:{
    HeaderClass,
    BodyClass
  }
}
</script>
<style>
</style>