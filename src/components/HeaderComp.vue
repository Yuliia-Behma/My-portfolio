<template>
  <header>
    <div class="logo">
      <span id="my-name-logo">YULIIA BEHMA</span>
    </div>
    <div>
      <nav class="nav-header">
        <ul class="header-li">
          <li v-for="page in pages" :key="page.path">
            <RouterLink :to="page.path" class="link-header">{{
              page.title
            }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeaderComp",
  setup() {
    const pages = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Projects",
        path: "/projects",
      },
      {
        title: "Resume",
        path: "/resume",
      },
      {
        title: "Contacts",
        path: "/contacts",
      },
    ];
    return {
      pages,
    };
  },
  components: { RouterLink },
});
</script>

<style scoped>
header {
  display: flex;
  padding: 20px 50px;
  justify-content: space-evenly;
  background: linear-gradient(
    180deg,
    rgb(19, 23, 33) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.nav-header {
  margin: 0 auto;
}
.nav-header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-header li {
  margin: 0 5px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.link-header {
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: #ebeeed;
}
.router-link-active {
  color: #e55934;
  box-sizing: border-box;
  border-bottom: 2px solid #e55934;
    transition: all 0.3s ease;
}
.nav-header a {
  padding: 10px 30px;
}
.nav-header a:active,.nav-header a:hover{
  color: #e55934;
  box-sizing: border-box;
  border-bottom: 2px solid #e55934;
  transition: all 0.3s ease;
}

#my-name-logo{
  font-family: "El Messiri", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  color: #ebeeed;
  font-size: 1.5em;
   text-shadow: 5px 5px 20px #ffffff54,
  -5px -5px 20px #ffffff54,
  -5px 5px 20px #ffffff54,
  5px -5px 20px #ffffff54;
}
</style>
