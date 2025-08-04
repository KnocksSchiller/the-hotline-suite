import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'Hotline-Suite',
    component: HomeView
  },
  {
    path: '/getting-started',
    name: 'Getting Started',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/GettingStartedView.vue')
  },
  {
    path: '/places-to-talk',
    name: 'Places To Talk',
    component: () => import('@/views/PlacesToTalkView.vue')
  },
  {
    path: '/workshop-dives',
    name: 'Workshop Dives',
    component: () => import('@/views/WorkshopDivesView.vue')
  },
  {
    path: '/hotline-likes',
    name: 'Hotline-Likes',
    component: () => import('@/views/HlmLikesView.vue')
  },
  {
    path: '/lost-and-found',
    name: 'Lost And Found',
    component: () => import('@/views/LostAndFoundView.vue')
  },
  {
    path: '/hlm1-modding',
    name: 'Hotline 1 Modding',
    component: () => import('@/views/Hlm1ModdingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
