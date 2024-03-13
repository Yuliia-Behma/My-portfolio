<template>
  <header>
    <div class="logo">
      <span id="my-name-logo">Yuliia Behma</span>
    </div>
    <input type="checkbox" class="checkbox">
    <div class="burger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
    <div class="nav-div">
      <nav class="nav-header">
        <ul class="header-ul">
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
.header-ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
}
.nav-header li {
  margin: 10px 5px;
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
  padding: 10px 20px;
}
.nav-header a:active,
.nav-header a:hover {
  color: #e55934;
  box-sizing: border-box;
  border-bottom: 2px solid #e55934;
  transition: all 0.3s ease;
}

#my-name-logo {
  font-family: "El Messiri", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  color: #ebeeed;
  font-size: 1.5em;
  text-shadow: 5px 5px 20px #ffffff54, -5px -5px 20px #ffffff54,
    -5px 5px 20px #ffffff54, 5px -5px 20px #ffffff54;
  text-transform: uppercase;
}
.checkbox, .burger-lines{
  display: none;
}
.checkbox{
  position: absolute;
  height: 32px;
  width: 32px;
  top: 14px;
  left: calc(100% - 60px);
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  margin: 0;
}
.burger-lines{
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: calc(100% - 60px);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.burger-lines .line{
  display: none;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: #ebeeed;
}
.burger-lines .line1{
   transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}
.burger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}
.burger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}
input[type="checkbox"]:checked ~ .nav-div{
  left: calc(100% - 300px);
}
input[type="checkbox"]:checked ~ .burger-lines .line1 {
  transform: rotate(45deg);
}
input[type="checkbox"]:checked ~ .burger-lines .line2 {
  transform: scaleY(0);
}
input[type="checkbox"]:checked ~ .burger-lines .line3 {
  transform: rotate(-45deg);
}

@media (max-width: 767px) {
  header {
    flex-direction: column;
    padding: 10px 0 0;
  }

  .header-ul {
    flex-direction: column;
  }

  .nav-div {
    align-self: flex-end;
    background-color: #212738ea;
    width: 300px;
    border-radius: 0.7rem;
    position: absolute;
    top: 60px;
    left: 100%;
    z-index: 5;
    transition: all .5s ease-in-out;
  }
  #my-name-logo {
    line-height: 50px;
  }
  .checkbox, .burger-lines .line{
  display: block;
}
}
</style>
