<template>
  <div class="project-box">
    <div class="image-box">
      <a :href="currentProj.url" target="_blank"
        ><img
          class="project-img"
          :src="currentProj.img"
          alt="project img"
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
  box-sizing: border-box;
  padding: 15px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: inset 1px 1px 10px #99a2b7a2,
  inset -1px -1px 10px #99a2b7a2,
  inset -1px 1px 10px #212738b7,
  inset 1px -1px 10px #212738b7,
  3px 3px 20px #ffffff54,
  -3px -3px 20px #ffffff54,
  -3px 3px 20px #ffffff54,
  3px -3px 20px #ffffff54;
}

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
.source-code:hover{
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
summary::marker {
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
  width: 370px;
  aspect-ratio: 15/9;
  margin: 0 auto;
}
.project-img{
  width: 370px;
}
.project-img:hover {
  transform: scale(1.2);
  transition: 0.5s linear;
}
.project-img {
  transform: scale(1);
  transition: 0.5s linear;
}
@media screen and (max-width: 767px){
  .project-box{
    max-width: 360px;
  }
  .image-box{
    width: 320px;
  }
  .project-img{
  width: 320px;
}
details{
  margin-top: 15px;
  line-height: 1.5em;
  padding-bottom: 15px;
  border-bottom: 2px solid #6b6968;
}
summary{
  font-size: 1.2em;
}
.source-code{
  margin: 10px;
  border: 0;
  font-weight: 600;
}
}
</style>
