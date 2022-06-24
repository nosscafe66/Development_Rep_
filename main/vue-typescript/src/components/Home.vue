<script lang="ts">
import { ref,reactive} from 'vue';
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
      const count:any = ref(0);
      const state:any = reactive({
          count:1
          });
      
      const addRefCount:any = () => {
        count.value++;
      };
      
      const addReactiveCount:any = () => {
        state.count++;
      };
  }
})

</script>
<template>
    <h1>Fast Component</h1>
    <p>Ref Count:{{ count }}</p>
    <p>Reactive Count:{{ state.count }}</p>
      <div>
    <button @click="addRefCount">Ref Count+</button>
    <button @click="addReactiveCount">Reactive Count+</button>
  </div>
</template>