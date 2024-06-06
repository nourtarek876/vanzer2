import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpVue from "../views/HelpVue.vue"
import AboutView from "../views/AboutView.vue"
import BlogView from "../components/BlogView.vue"


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
          path: '/help',
        name: 'help',
        component: HelpVue
      },
      {
        path: '/blog',
      name: 'blog',
      component: BlogView
    },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes //routes = routes
})

export default router
