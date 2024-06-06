import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '@/assets/scss/main.scss'

import  { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core' ;

import { fas } from '@fortawesome/free-solid-svg-icons' 
import { fab } from '@fortawesome/free-brands-svg-icons' 
import { far } from '@fortawesome/free-regular-svg-icons' 

import 'wow.js'
import 'wow.js/dist/wow.min.js'
import 'wow.js/css/libs/animate.css'
import 'animate.css/animate.min.css'



library.add(fas, far, fab);

const app = createApp(App)
.component("fa", FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
