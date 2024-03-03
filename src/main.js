import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'
import Contacts from './components/Contacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/resume', component: Resume },
        { path: '/contacts', component: Contacts }
]
})


const app = createApp(App);
app.use(router);
app.mount('#app');
