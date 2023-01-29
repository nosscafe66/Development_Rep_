<template>
    <div class="buttonfunction">
        <h2>{{ number }}</h2>
        <ManyFunction :total-number="number" @myEvent="number = $event"></ManyFunction>
    </div>
</template>
<script>
import ManyFunction from '../components/ManyFunction.vue';
export default {
 name: 'ManyFunctionPage',
 data() {
    return {
      number: 10,
    };
  },
 components: {
    ManyFunction,
 },
};
</script>
<style>
</style>