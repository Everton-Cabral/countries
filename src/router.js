import { createRouter, createWebHistory } from 'vue-router'
import ContainerCountries from './components/ContainerCountries.vue'

const routes = [
    {
        path: '/',
        name: 'containercountries',
        component: ContainerCountries 
      },
      {
        path: '/details',
        name: 'about',
        component: About
      }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
