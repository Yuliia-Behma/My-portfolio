<template>
  <div class="contact-wraper">
    <h2>If you want to contact me</h2>
    <div class="contact-container">
      <div class="contact-item">
        <div class="contact-icon"><img src="../../public/img/lightIcons/telephone.png" alt="telephone"></div>
        <div class="contact-data">+38(097) 858-66-77</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><img src="../../public/img/lightIcons/email.png" alt="email"></div>
        <div class="contact-data">juliyabegma@gmail.com</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><img src="../../public/img/lightIcons/linkedin.png" alt="linkedIn"></div>
        <div class="contact-data">
          <a
            href="https://www.linkedin.com/in/yuliia-behma-939394266/"
            target="_blank"
            >LinkedIn</a
          >
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><img src="../../public/img/lightIcons/github.png" alt="gitHub"></div>
        <div class="contact-data">
          <a href="https://github.com/Yuliia-Behma" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><img class="location-icon" src="../../public/img/lightIcons/location.png" alt="location"></div>
        <div class="contact-data">
          <a href="https://maps.app.goo.gl/xqz1oWPRjfzBhtWF8" target="_blank"
            >Kremenchuk, Ukraine</a
          >
        </div>
      </div>
    </div>
    <iframe
      id="mapOfLocation"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83586.76930758652!2d33.40414843413189!3d49.10399638247544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d753ab9b0218df%3A0x49204e009e9c5b1c!2z0JrRgNC10LzQtdC90YfRg9C6LCDQn9C-0LvRgtCw0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMzk2MDA!5e0!3m2!1suk!2sua!4v1710593881383!5m2!1suk!2sua"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contacts",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.contact-wraper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff12;
  backdrop-filter: blur(2px);
  border-radius: 10px;
}
.contact-wraper h2{
  color: #ebeeed;
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 3em;
  margin: 0;
  border-bottom: 2px solid;
  width: 600px;
  text-align: center;
}
.contact-container{
  padding: 20px;
  font-family: "Noticia Text", serif;
  font-weight: 400;
  color: #ebeeed;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
}
.contact-container a{
  text-decoration: none;
  color: #ebeeed;
}
.contact-container a:hover{
  color: #e55934;
  text-decoration: underline;
}
.contact-item{
  padding: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact-icon img{
  width: 25px;
  padding: 4px;
}
.contact-icon{
  width: 33px;
  height: 33px;
}
.contact-data{
  padding-left: 10px;
}
.contact-icon .location-icon{
  padding: 0 4px;
  height: 33px;
}
#mapOfLocation{
  box-sizing: border-box;
  box-shadow: 5px 5px 30px #ffffff54, -5px -5px 30px #ffffff54,
    -5px 5px 30px #ffffff54, 5px -5px 30px #ffffff54;
}
@media screen and (max-width: 767px) {
  #mapOfLocation {
    width: 90%;
  }
  .contact-wraper h2{
    font-size: 1.7em;
    width: 90%;
  }
  .contact-container{
    font-size: 1.3em;
  }
}
</style>
