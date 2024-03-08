<template>
<div class="project-box">
<img :src="'../../public/img/' + currentProj.img" alt="project img">
<a :href="currentProj.url" target="_blank">{{ currentProj.name }}</a>
<details>
  <summary>Description</summary>
  {{ currentProj.descriptions }}
</details>
<a :href="currentProj.sourceCode" target="_blank">Source Code</a>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "OneProject",
  props: ["currentProj"],
  setup() {

    return {
      
    }
  }
});
</script>

<style scoped>
.project-box{
  width: 400px;
  padding: 5px;
  background-color: #ebeeed;
}
</style>