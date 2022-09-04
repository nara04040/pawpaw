import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dogpage',
    name: 'DogPageView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pages" */ '../views/DogPageView.vue')
  },
  {
    path: '/catpage',
    name: 'CatPageView',
    component: () => import(/* webpackChunkName: "pages" */ '../views/CatPageView.vue')
  },
  {
    path: '/toypage',
    name: 'ToyPageView',
    component: () => import(/* webpackChunkName: "pages" */ '../views/ToyPageView.vue')
  },
  {
    path: '/qnapage',
    name: 'QnaPageView',
    component: () => import(/* webpackChunkName: "pages" */ '../views/QnaPageView.vue')
  },
  {
    path: '/loginpage',
    name: 'LoginPageView',
    component: () => import(/* webpackChunkName: "pages" */ '../views/LoginPageView.vue')
  },
  {
    path: '/signuppage',
    name: 'SignupPageView',
    component: () => import(/* webpackChunkName: "pages" */ '../views/SignupPageView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
