<template>
  <div class="wraper">
    <h2 class="projects-header">My projects</h2>
    <div class="projects-container">
      <div class="project" v-for="project in projects" :key="project.url">
        <OneProject :currentProj="project"></OneProject>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import OneProject from "@/components/OneProject.vue";

export default defineComponent({
  name: "Projects",

  setup() {
    const projects = [
      {
        url: "https://yuliia-behma.github.io/tetris_game/",
        img: "/img/tetris.jpg",
        name: "Tetris game",
        descriptions:
          "The Tetris game is created using pure JavaScript, HTML, and CSS. It's adapted for mobile devices and tablets.",
        sourceCode: "https://github.com/Yuliia-Behma/tetris_game",
      },
      {
        url: "https://main--luminous-centaur-178f20.netlify.app/",
        img: "/img/forms.jpg",
        name: "Sign In/ Sign Up forms",
        descriptions:
          "The Sign In/Sign Up forms are created using Vue3. Data input validation has been implemented. Client-side routing is configured using the vue-router library.",
        sourceCode: "https://github.com/Yuliia-Behma/Vue-3-sign-in-up-form",
      },
    ];
    return {
      projects,
    };
  },
  components: { OneProject },
});
</script>

<style scoped>
.wraper {
  margin: 0 auto;
  max-width: 1300px;
  background-color: #ffffff20;
  backdrop-filter: blur(2px);
  padding: 20px 20px 80px;
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-items: baseline;
  justify-items: center;
}
.projects-header{
  /* color: #ebeeed; */
  text-align: center;
  text-transform: uppercase;
    font-family: "Anton", sans-serif;
  font-weight: 400;
  margin: 10px 0;
  font-size: 3em;
 color: #ebeeed;
}
</style>
