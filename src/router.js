import { createRouter, createWebHistory } from 'vue-router'
import ContainerCountries from './components/ContainerCountries.vue'
import DetailsCountry from './components/DetailsCountry.vue'

const routes = [
    {
        path: '/',
        name: 'containercountries',
        component: ContainerCountries 
      },
      {
        path: '/details',
        name: 'details',
        component: DetailsCountry
      }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
