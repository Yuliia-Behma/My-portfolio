<template>
  <HeaderComp></HeaderComp>
  <MainLayout>
    <RouterView ></RouterView>
  </MainLayout>
  
</template>

<script>
import { defineComponent } from "vue";
import HeaderComp from "./components/HeaderComp.vue";
import MainLayout from "./components/MainLayout.vue";
import { RouterView } from "vue-router"


export default defineComponent({
  setup() {
    return {};
  },
  components: {
    HeaderComp,
    MainLayout,
    RouterView
  },
});
</script>

<style>
.header-li{
  list-style: none;
  padding: 0;
}

</style>
