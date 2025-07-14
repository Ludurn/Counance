import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import EntryFlowView from '@/views/EntryFlowView.vue'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/entry-flow',
    name: 'entry-flow',
    component: EntryFlowView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
