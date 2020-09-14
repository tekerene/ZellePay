import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/get-started',
    name: 'Get-started',
    component: import(/* webpackChunkName: "get-started" */ '../views/get-started.vue')
  },
  {
    path: "/faq",
    name: 'Faq',
    component: import(/* webpackChunkName: "faq" */ '../views/faq.vue')
  },
{
  path: "/pay-safe",
  name: 'Pay-Safe',
  component: import(/* webpackChunkName: "pay-safe" */ '../views/pay-safe.vue')
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
