<template>
  <div class="project-box">
    <div class="image-box">
      <a :href="currentProj.url" target="_blank"
        ><img
          class="project-img"
          :src="currentProj.img"
          alt="project img"
          width="380"
      /></a>
    </div>
    <a class="project-name" :href="currentProj.url" target="_blank">{{
      currentProj.name
    }}</a>
    <details>
      <summary>Description</summary>
      {{ currentProj.descriptions }}
    </details>
    <a :href="currentProj.sourceCode" target="_blank" class="source-code"
      >Source Code...</a
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OneProject",
  props: ["currentProj"],
  setup() {
    return {};
  },
});
</script>

<style scoped>
.project-box {
  width: 400px;
  padding: 15px;
  background-color: #ebeeed8e;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.project-img,
.project-name {
  align-self: center;
}
.project-name {
  text-decoration: none;
  color: #000000;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  margin: 7px 0;
  font-size: 24px;
  text-transform: uppercase;
}
.project-name:hover,
.source-code:hover {
  color: #e55934;
  text-decoration: underline;
}
details {
  font-family: "Noticia Text", serif;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 7px;
  padding-left: 20px;
}
summary {
  font-weight: 600;
}
summary::marker{
  color: #e55934;
}
.source-code {
  text-decoration: none;
  padding-left: 20px;
  color: #000000;
  font-family: "Noticia Text", serif;
  font-weight: 400;
  font-size: 16px;
  border-top: 2px solid #6b6968;
}
.image-box {
  overflow: hidden;
  box-shadow: 5px 5px 10px #36363661, -5px -5px 10px #36363661,
    -5px 5px 10px #36363661, 5px -5px 10px #36363661;
  width: 380px;
  aspect-ratio: 15/9;
}
.project-img:hover{
  transform: scale(1.2);
  transition: .5s linear;
}
.project-img{
  transform: scale(1);
  transition: .5s linear;
}
</style>
