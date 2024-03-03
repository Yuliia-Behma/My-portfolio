<template>
  <div class="resume-wraper">
    <div class="resume">
      <div class="main">
        <div class="header-resume">
          <h3 class="position">Front-end developer</h3>
          <h1 class="my-name-in-resume">Yuliia Behma</h1>
          <p class="about-me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui
            voluptatibus aliquam corporis vero illo commodi ducimus fuga a
            repudiandae!
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
              <img src="../../public/img/icons/github.png" alt="github-logo" />
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
          <ul>
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
          <ul>
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
.contact-container {
  display: flex;
  align-items: center;
}
.contact-icon img {
  width: 20px;
}
.sidebar{
  width: 400px;
  box-sizing: border-box;
}
</style>
