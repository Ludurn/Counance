import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import EntryFlowView from '@/views/EntryFlowView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
