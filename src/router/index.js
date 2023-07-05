import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import RegIntencionView from '../views/RegIntencionView.vue'
import MisasView from '../views/MisasView.vue'
import PrincipalView from '../views/PrincipalView.vue'
import LoginView from '../views/LoginView.vue'
const routes = [
  {
    path: '/reginten',
    name: 'reginten',
    component: RegIntencionView
  },
  {
    path: '/misas',
    name: 'misas',
    component: MisasView
  },
  {
    path: '/',
    name: 'principal',
    component: PrincipalView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
