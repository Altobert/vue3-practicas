import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsVue from '../views/Cards.vue'
import AboutViewVue from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',    
    //forma opcional de caargar componente
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutViewVue
  },
  {
    path: '/cards',
    name: 'cards',    
    component: CardsVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
