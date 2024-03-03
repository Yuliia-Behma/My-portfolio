<template>
 <div class="custom-layout">
    <slot></slot>
 </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'MainLayout',
  setup() {

    return {
      
    }
  }
});
</script>

<style scoped>
.custom-layout{
    margin: 0 auto;
    box-sizing: border-box;
}
</style>