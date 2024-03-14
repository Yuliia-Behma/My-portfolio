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
  box-sizing: border-box;
  max-width: 1200px;
  background-color: #ffffff12;
  backdrop-filter: blur(2px);
  padding: 20px 40px 80px;
  min-height: calc(100vh - 120px);
  border-radius: 1.2rem;
  box-shadow: 5px 5px 30px #ffffff54, -5px -5px 30px #ffffff54,
    -5px 5px 30px #ffffff54, 5px -5px 30px #ffffff54;
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-items: baseline;
  justify-items: center;
  padding-top: 20px;
}
.projects-header {
  text-align: center;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-weight: 400;
  margin: 10px 0;
  font-size: 3em;
  color: #ebeeed;
  border-bottom: 2px solid #ebeeed;
}
@media screen and (max-width: 767px){
  .projects-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .wraper{
    box-sizing: border-box;
    padding: 10px 10px 40px;
    border-radius: 0;
    width: 100%;
    height: auto;
  }
  .projects-header{
    font-size: 1.5em;
  }
}
</style>
