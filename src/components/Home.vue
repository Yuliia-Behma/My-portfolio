<template>
  <div id="home-container">
    <div class="wraper">
      <div class="baner">
        <h1>
          Hi, my name is <br /><span id="my-name" @mouseover="fly" @click="fly"
            >Yuliia Behma</span
          >
        </h1>
        <h2>I'm a Frontend Developer</h2>
      </div>
      <div id="baner-right"></div>
    </div>
    <div id="boxRacket" v-if="flyRacket">
      <img src="../../public/img/racket.png" alt="racket" id="racket" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const flyRacket = ref(false);

    function fly() {
      if (flyRacket.value === true) {
        return;
      } else {
        flyRacket.value = true;
        setTimeout(() => {
          flyRacket.value = false;
        }, 2000);
      }
    }

    return {
      flyRacket,
      fly,
    };
  },
});
</script>

<style scoped>
#racket {
  width: 280px;
}
@keyframes fly {
  from {
    transform: scale(1.7);
    top: 100vh;
    left: 65%;
  }
  to {
    transform: scale(0.2);
    top: -100px;
    left: -180px;
  }
}
#boxRacket {
  position: absolute;
  left: 50%;
  top: 100vh;
  animation: fly 2s ease-in-out;
}

#my-name:hover {
  text-shadow: 10px 10px 35px #00000054, -10px -10px 35px #00000054,
    -10px 10px 35px #00000054, 10px -10px 35px #00000054;
}
.wraper {
  text-align: end;
  color: #fff;
  padding: 70px 30px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  max-width: 1200px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.baner {
  margin-right: 20px;
  height: max-content;
}
h1 {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 5em;
  margin: 20px 0;
  text-shadow: 5px 5px 20px #00000054, -5px -5px 20px #00000054,
    -5px 5px 20px #00000054, 5px -5px 20px #00000054;
}
h2 {
  font-family: "Noticia Text", serif;
  font-weight: 700;
  font-style: italic;
  color: #e55934;
  text-shadow: 5px 5px 15px #00000084, -5px -5px 15px #00000084,
    -5px 5px 15px #00000084, 5px -5px 15px #00000084;
}
#baner-right {
  width: 1px;
  height: 333px;
  border-right: 2px solid #fff;
  box-shadow: 3px 3px 15px #ffffff, 3px -3px 15px #ffffff,
    -5px -5px 15px #000000, -5px 5px 15px #000000;
}
#home-container {
  position: relative;
  height: 100%;
  overflow: hidden;
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 2.5em;
  }
  #my-name {
    font-size: 2em;
  }
  #home-container {
    max-height: calc(100vh - 60px);
  }
}
</style>
