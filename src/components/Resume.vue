<template>
  <div class="resume-wraper">
    <div class="resume">
      <div class="main">
        <div class="header-resume">
          <h3 class="position">Front-end developer</h3>
          <h1 class="my-name-in-resume">Yuliia Behma</h1>
          <p class="about-me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo tempora temporibus consectetur, earum quasi natus, maxime expedita porro nihil, aut voluptates minus vel recusandae molestiae dignissimos illum accusantium laboriosam? Non consequuntur beatae libero, dignissimos, ad quod assumenda doloremque vero reiciendis voluptatum expedita delectus porro exercitationem tenetur quidem dolor culpa.
          </p>
        </div>
        <div class="projects">
          <h2 class="block-name">Projects</h2>
        </div>
        <div class="work-experience">
          <h2 class="block-name">Work-experience</h2>
          <div class="work-position">
            <h3>Work 1</h3>
            <h4 class="work-education-time">February 2024</h4>
            <ul class="work-task-block">
              <li class="work-task">something 1</li>
              <li class="work-task">something 2</li>
              <li class="work-task">something 3</li>
            </ul>
          </div>
          <div class="work-position">
            <h3>Work 2</h3>
            <h4 class="work-education-time">February 2024</h4>
            <ul class="work-task-block">
              <li class="work-task">something 1</li>
              <li class="work-task">something 2</li>
              <li class="work-task">something 3</li>
            </ul>
          </div>
          <div class="work-position">
            <h3>Work 3</h3>
            <h4 class="work-education-time">February 2024</h4>
            <ul class="work-task-block">
              <li class="work-task">something 1</li>
              <li class="work-task">something 2</li>
              <li class="work-task">something 3</li>
            </ul>
          </div>
        </div>
        <div class="education">
          <h2 class="block-name">Education</h2>
          <div class="step-education">
            <h3 class="educational-institution">University</h3>
            <h4 class="specialization">
              Specialist's degree | Accounting and Audit
            </h4>
            <p class="work-education-time">April 2016 - June 2017 | Ukraine</p>
          </div>
          <div class="step-education">
            <h3 class="educational-institution">ITVDN</h3>
            <h4 class="specialization">Front-end developer | IT</h4>
            <p class="work-education-time">
              October 2022 - March 2024 | Ukraine
            </p>
          </div>
          <div class="step-education">
            <h3 class="educational-institution">ITVDN</h3>
            <h4 class="specialization">Angular developer | IT</h4>
            <p class="work-education-time">
              October 2022 - March 2024 | Ukraine
            </p>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="photo"></div>
        <div class="side-container">
          <div class="contacts">
            <h2 class="block-name">Contacts</h2>
            <div class="contact-container">
              <div class="contact-icon">
                <img
                  src="../../public/img/icons/telephone.png"
                  alt="telephone-logo"
                />
              </div>
              <div class="contact-info">+38 (097) 858-66-77</div>
            </div>
            <div class="contact-container">
              <div class="contact-icon">
                <img src="../../public/img/icons/email.png" alt="email-logo" />
              </div>
              <div class="contact-info">juliyabegma@gmail.com</div>
            </div>
            <div class="contact-container">
              <div class="contact-icon">
                <img
                  src="../../public/img/icons/linkedin.png"
                  alt="linkedin-logo"
                />
              </div>
              <div class="contact-info">
                <a
                  href="https://www.linkedin.com/in/yuliia-behma-939394266/"
                  target="_blank"
                  >LinkedIn</a
                >
              </div>
            </div>
            <div class="contact-container">
              <div class="contact-icon">
                <img
                  src="../../public/img/icons/github.png"
                  alt="github-logo"
                />
              </div>
              <div class="contact-info">
                <a href="https://github.com/Yuliia-Behma" target="_blank"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
          <div class="skills-block">
            <h2 class="block-name">Tech skills</h2>
            <ul class="skill-list">
              <li class="skill">HTML5</li>
              <li class="skill">CSS3/ SCSS</li>
              <li class="skill">JavaScript</li>
              <li class="skill">TypeScript</li>
              <li class="skill">Git/ GitHub</li>
              <li class="skill">Angular</li>
              <li class="skill">Vue.js</li>
              <li class="skill">React.js</li>
              <li class="skill">Flex-box/ Grid</li>
            </ul>
          </div>
          <div class="skills-block">
            <h2 class="block-name">Soft skills</h2>
            <ul class="skill-list">
              <li class="skill">Team-player</li>
              <li class="skill">Communicative</li>
              <li class="skill">Punctual</li>
              <li class="skill">Clever</li>
              <li class="skill">Tolerant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Resume",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.resume-wraper {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #ffffff20;
  backdrop-filter: blur(2px);
}
.resume {
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
  background-color: #fff;
  justify-content: center;
}

.contact-icon img {
  width: 24px;
}
.sidebar {
  width: 400px;
  box-sizing: border-box;
  background-color: #ebeeed;
  border-left: 2px solid #e55934;
}
.side-container {
  padding: 20px;
}
.block-name {
  color: #e55934;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  margin: 0;
}
.skills-block,
.contacts {
  padding-bottom: 20px;
}
.skills-block ul {
  margin: 0;
  padding-left: 20px;
  font-family: "Noticia Text", serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  list-style: circle;
}
.contact-container{
  display: flex;
  align-items: center;
  font-family: "Noticia Text", serif;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
}
.skill-list li::marker {
  font-size: 6px;
  line-height: 24px;
  text-align: center;
  color: #e55934;
}
.skill{
  line-height: 24px;
}
.contact-info{
  padding-left: 10px;
}
.contact-info a{
  text-decoration: none;
  color: #000;
}
.contact-info a:hover{
  color: #e55934;
  text-decoration: underline;
}
.contact-icon{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main{
  padding: 50px;
}
.header-resume{
  text-align: end;
}
.position{
  margin: 0;
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  color: #e55934;
}
.my-name-in-resume{
  margin: 0;
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 4em;
  line-height: 1.2em;
  text-transform: uppercase;
  background-image: url("../../public/img/bg-name1.jpg");
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.about-me{
  font-family: "Noticia Text", serif;
  font-weight: 700;
  font-style: italic;
  text-align: end;
}
.main .block-name{
  border-bottom: 2px solid #e55934;
  text-align: end;
}
</style>
