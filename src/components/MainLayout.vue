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
    height: calc(100% - 116px)
}
@media screen and (max-width: 767px){
  .custom-layout{
    width: 100%;
    height: calc(100vh - 60px);
  }
}
</style>